const { Pool } = require("pg");
require("dotenv").config();
const PG_URI = process.env.PG_URI;
// console.log('URI', PG_URI);

const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contiains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to the access point to the database.
module.exports = {
  query: (text: string, params: string, callback: Function) => {
    // console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
