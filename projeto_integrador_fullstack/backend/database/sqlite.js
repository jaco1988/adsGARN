const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS fornecedor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS produto_fornecedor (
    produto_id INTEGER,
    fornecedor_id INTEGER
  )`);
});

module.exports = db;
