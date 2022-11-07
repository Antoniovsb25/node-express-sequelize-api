const Fabricantes = require('./Fabricantes');
const Produto = require('./Produto');
const Usuarios = require('./Usuarios');

Produto.belongsTo(Fabricantes, {
    foreignKey: 'fabricante_id'
})

Fabricantes.hasMany(Produto, {
    foreignKey: 'fabricante_id'
})

module.exports = {
    Fabricantes,
    Produto,
    Usuarios
};