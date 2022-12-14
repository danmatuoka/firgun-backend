import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export { AppDataSource };
