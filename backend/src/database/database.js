const { Pool } = require("pg");

// dbConnectionInfo is an object with the postgreSQL connection parameters
const dbConnectionInfo = require("../config/dbConnectionInfo");

const pool = new Pool(dbConnectionInfo);

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
};

module.exports = {
  query,
  pool,
};
