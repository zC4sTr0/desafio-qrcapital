//testing postgreSQL for database connection and queries
const { Pool } = require("pg");
require("dotenv").config();

const dbConnectionInfo = {
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database_name,
  host: process.env.database_host,
  port: process.env.database_port,
};

describe("Database", () => {
  it("should connect to the database", async () => {
    const pool = new Pool(dbConnectionInfo);
    pool.connect((err, client, done) => {
      if (err) {
        expect(err).toBeNull();
        return;
      }
      expect(true).toBe(true);
    });
  });
});
