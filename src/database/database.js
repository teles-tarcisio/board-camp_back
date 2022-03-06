import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const dbConfig = {
  connectionString: process.env.DB_URI,
  ssl: {
    rejectUnauthorized: false
  }
};

const dbConnection = new Pool(dbConfig);
await dbConnection.query('CREATE EXTENSION IF NOT EXISTS unaccent;');

export default dbConnection;