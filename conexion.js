const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Olivetti2013",
  database: "tienda_node"
});