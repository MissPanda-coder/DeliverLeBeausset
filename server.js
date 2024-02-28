// database.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apideliver",
  port: "3306", // port natif windows
});

module.exports = db;
