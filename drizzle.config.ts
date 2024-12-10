import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();
dotenv.config({ path: '.env.local', override: true });

const databaseUrl = process.env.DATABASE_URL as string;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in .env or .env.local');
}

export default defineConfig({
  out: './db/migrations',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL! as string,
  },
});
