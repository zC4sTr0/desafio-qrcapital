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
  return new Promise((resolve, reject) => {
    pool
      .query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  connect,
  pool,
  query,
};