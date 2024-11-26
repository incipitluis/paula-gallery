CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"description" varchar(1000),
	"likes" integer DEFAULT 0,
	"sales" integer DEFAULT 0,
	"available" boolean DEFAULT true,
	"price" numeric(10, 2),
	"estimated_cost" numeric(10, 2),
	"views" integer DEFAULT 0,
	"pictures_id" jsonb,
	"project_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products_to_projects" (
	"product_id" uuid,
	"project_id" uuid,
	CONSTRAINT "products_to_projects_product_id_project_id_pk" PRIMARY KEY("product_id","project_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products_to_sales" (
	"product_id" uuid,
	"sale_id" uuid,
	CONSTRAINT "products_to_sales_product_id_sale_id_pk" PRIMARY KEY("product_id","sale_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"description" varchar(1000),
	"likes" integer DEFAULT 0,
	"sales" integer DEFAULT 0,
	"available" boolean DEFAULT true,
	"price_range" varchar(100),
	"views" integer DEFAULT 0,
	"pictures_id" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"buyer" varchar(255) NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"origin" varchar(255),
	"price" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales_to_projects" (
	"sale_id" uuid,
	"project_id" uuid,
	CONSTRAINT "sales_to_projects_sale_id_project_id_pk" PRIMARY KEY("sale_id","project_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products_to_projects" ADD CONSTRAINT "products_to_projects_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products_to_projects" ADD CONSTRAINT "products_to_projects_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products_to_sales" ADD CONSTRAINT "products_to_sales_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products_to_sales" ADD CONSTRAINT "products_to_sales_sale_id_sales_id_fk" FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_to_projects" ADD CONSTRAINT "sales_to_projects_sale_id_sales_id_fk" FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_to_projects" ADD CONSTRAINT "sales_to_projects_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
