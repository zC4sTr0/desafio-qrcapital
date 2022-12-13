const { Pool } = require("pg");
require("dotenv").config();

const dbConnectionInfo = {
  user: process.env.database_user,
  password: process.env.database_password,
  database: process.env.database_name,
  host: process.env.database_host,
  port: process.env.database_port,
};

async function connect() {
  const pool = new Pool(dbConnectionInfo);
  pool.connect((err, client, done) => {
    if (err) {
      console.error("Error connecting: ", err.stack);
      return;
    }
    console.log("Connected to postgres!");
  });
  return pool;
}

module.exports = {
  connect,
};
