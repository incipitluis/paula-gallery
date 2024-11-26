import { db } from "@/db/drizzle";
import { InsertProduct, productsTable, projectsTable } from "@/db/schema";
import { InsertProject } from "../../db/schema";

// Create a new project in admin panel

export async function createProject(project: InsertProject) {
  try {
    return db.insert(projectsTable).values(project);
  } catch (error) {
    console.error(error);
  }
}

// Create a new product in admin panel

export async function createProduct(product: InsertProduct) {
  return db.insert(productsTable).values(product);
}
