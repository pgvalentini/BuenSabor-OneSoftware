const Sequelize = require('sequelize');

const modeloInsumo = require('./models/insumo');
const modeloProducto = require('./models/producto');
const modeloRubroInsumo = require('./models/rubroinsumo');
const modeloRubroProducto = require('./models/rubroproducto');

var mysql = require('mysql');

const sequelize = new Sequelize('elbuensaborini', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

var mysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "elbuensaborini"
  });

////Con esto creo las tablas en MySql según los modelos
const Insumo = modeloInsumo(sequelize, Sequelize);
const Producto = modeloProducto(sequelize, Sequelize);
const RubroInsumo = modeloRubroInsumo(sequelize, Sequelize);
const RubroProducto = modeloRubroProducto(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
})

module.exports = {
    Insumo,
    Producto,
    RubroInsumo,
    RubroProducto
}