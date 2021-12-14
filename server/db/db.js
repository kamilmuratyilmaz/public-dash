const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
});

client.connect();

module.exports = client;
