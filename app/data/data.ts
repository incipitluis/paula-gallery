"use server"

import { db } from "@/db/drizzle";
import { projectsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProjects() {
  return db.select().from(projectsTable);
}

export async function getProjectByName(name: string) {
  return db.select().from(projectsTable).where(eq(projectsTable.name, name));
}

export async function getProjectById(id: string) {
  return db.select().from(projectsTable).where(eq(projectsTable.id, id));
}