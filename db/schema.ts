import { integer, pgTable, varchar, timestamp, boolean, decimal, text, jsonb, uuid, primaryKey } from "drizzle-orm/pg-core";


export const projectsTable = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
  description: varchar("description", { length: 1000 }),
  likes: integer("likes").default(0),
  sales: integer("sales").default(0),
  available: boolean("available").default(true),
  price_range: varchar("price_range", { length: 100 }),
  views: integer("views").default(0),
  pictures_id: jsonb("pictures_id").$type<string[]>()
});

export const productsTable = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
  description: varchar("description", { length: 1000 }),
  likes: integer("likes").default(0),
  sales: integer("sales").default(0),
  available: boolean("available").default(true),
  price: decimal("price", { precision: 10, scale: 2 }),
  estimated_cost: decimal("estimated_cost", { precision: 10, scale: 2 }),
  views: integer("views").default(0),
  pictures_id: jsonb("pictures_id").$type<string[]>(),
  project_id: uuid("project_id").references(() => projectsTable.id)
});

export const salesTable = pgTable("sales", {
  id: uuid("id").primaryKey().defaultRandom(),
  buyer: varchar("buyer", { length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
  origin: varchar("origin", { length: 255 }),
  price: decimal("price", { precision: 10, scale: 2 }).notNull()
});

export const productsToSales = pgTable("products_to_sales", {
  product_id: uuid("product_id").references(() => productsTable.id),
  sale_id: uuid("sale_id").references(() => salesTable.id)
},
(t) => ({
  pk: primaryKey({ columns: [t.product_id, t.sale_id] })
}));

export const productsToProjects = pgTable("products_to_projects", {
  product_id: uuid("product_id").references(() => productsTable.id),
  project_id: uuid("project_id").references(() => projectsTable.id)
},
(t) => ({
  pk: primaryKey({ columns: [t.product_id, t.project_id] })
}));

export const salesToProjects = pgTable("sales_to_projects", {
  sale_id: uuid("sale_id").references(() => salesTable.id),
  project_id: uuid("project_id").references(() => projectsTable.id)
},
(t) => ({
  pk: primaryKey({ columns: [t.sale_id, t.project_id] })
}));

export type InsertProject = typeof projectsTable.$inferInsert;
export type SelectProject = typeof projectsTable.$inferSelect;
export type InsertProduct = typeof productsTable.$inferInsert;
export type SelectProduct = typeof productsTable.$inferSelect;
export type InsertSale = typeof salesTable.$inferInsert;
export type SelectSale = typeof salesTable.$inferSelect;



