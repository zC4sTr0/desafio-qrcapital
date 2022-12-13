const { Pool } = require("pg");
require("dotenv").config();

const dbConnectionInfo = {
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database_name,
  host: process.env.database_host,
  port: process.env.database_port,
};

const pool = new Pool(dbConnectionInfo);

async function connect() {
  pool.connect((err) => {
    if (err) {
      return err;
    }
  });
  return pool;
}

async function query(text, params) {
  pool.query(text, params, (err, res) => {
    if (err) {
      console.log("Error executing query.", err.stack);
      return err;
    }
    return res;
  });
}

module.exports = {
  connect,
  pool,
  query,
};
