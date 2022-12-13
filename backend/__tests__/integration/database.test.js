//testing postgreSQL for database connection and queries
const { Pool } = require("pg");
const db = require("../../src/database/database");

const dbConnectionInfo = {
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database_name,
  host: process.env.database_host,
  port: process.env.database_port,
};

const query_createTable = `
CREATE TABLE IF NOT EXISTS users(
  ID SERIAL PRIMARY KEY, 
  username VARCHAR(255), 
  password VARCHAR(255) 
);
`;

describe("Database", () => {
  it("should connect to the database", async () => {
    const testConnection = await db.connect();
    expect(testConnection).not.toBeInstanceOf(Error);
  });

  it("should create a new table if not exists", async () => {
    var result_QryCreateTable = await db.query(query_createTable);
    expect(result_QryCreateTable).not.toBeInstanceOf(Error);
  });
});
