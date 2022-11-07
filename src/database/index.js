const Sequelize = require('sequelize');

const DB_NAME = 'loja';
const DB_USER = 'root';
const DB_PASS = '1221';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};
// obj para guardar a conexão com banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (err) {
    console.error("erro ao tentar conexão com o database.");
};

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("banco de dados conectado!")
    } catch (err) {
        console.error(err)
    }
}

Object.assign(db, {
    hasConnection
})

module.exports = db;
