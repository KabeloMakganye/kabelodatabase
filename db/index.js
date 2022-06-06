const pgp=require("pg-promise")();
const connectionString = "postgres://ztvgajvkrkwsnf:d73fbfd88efb7dcaa26a64cb6a931ee6d241d2d665b72b8b0c08331fcf847a60@ec2-54-227-248-71.compute-1.amazonaws.com:5432/d2d07fptk1hreq";

const db = pgp(connectionString);

var pg = require('pg');
pg.defaults.ssl = true

module.exports = db;