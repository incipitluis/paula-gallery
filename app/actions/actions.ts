"use server"

import { db } from "@/db/drizzle";
import { InsertProduct, productsTable, projectsTable } from "@/db/schema";
import { InsertProject } from "../../db/schema";

// Create a new project in admin panel

export const createProject = async (name: string, date: string, description: string) => {
  try {
    const formattedProject = {
      name,
      date: date ? new Date(date) : new Date(),
      description
    };
    await db.insert(projectsTable).values(formattedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
}

// Create a new product in admin panel

export const createProduct = async (name: string, date: string, description: string, price: string, estimated_cost: string, project_id: string) => {
  try {
    const formattedProduct = {
      name,
      date: date ? new Date(date) : new Date(),
      description,
      price: price?.toString() ?? "0",
      estimated_cost: estimated_cost?.toString() ?? "0",
      project_id
    };
    await db.insert(productsTable).values(formattedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }
}
