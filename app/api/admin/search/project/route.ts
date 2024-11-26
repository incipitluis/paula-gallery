import { eq, ilike, sql } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db/drizzle"
import { projectsTable } from "@/db/schema"


//this receives a name in search params and returns projects names and ids when name is ilike the query
export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get("query")
  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 })
  }
  const results = await db
   .select({
    id: sql`distinct_projects.id`,
    name: sql`distinct_projects.name`,
   })
   .from(sql`(SELECT DISTINCT ON (name) * FROM ${projectsTable} WHERE name ILIKE ${'%'+query+'%'}) as distinct_projects`)

  if (results.length === 0) {
    return NextResponse.json({ error: "No results found" }, { status: 404 })
  }

  const response = {
    results: results.map((result) => ({
      id: result.id,
      name: result.name,
    })),
  }

  return NextResponse.json(response)
}
