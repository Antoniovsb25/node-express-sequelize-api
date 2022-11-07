const db = require('../database');
const { Model, DataTypes } = require('sequelize');


const Produto = db.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.FLOAT
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    fabricante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Model.Fabricantes,
            key: "id",
        },
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'produto'
})

module.exports = Produto;