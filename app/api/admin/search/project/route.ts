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
   .select()
   .from(projectsTable).where(sql`${projectsTable.name} ILIKE ${`%${query}%`}`)
  if (results.length === 0) {
    return NextResponse.json({ error: "No results found" }, { status: 404 })
  }
  return NextResponse.json(results)
}
