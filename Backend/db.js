const Sequelize = require('sequelize');

const modeloInsumo = require('./models/insumo');
const modeloProducto = require('./models/producto');
const modeloRubroInsumo = require('./models/rubroinsumo');
const modeloRubroProducto = require('./models/rubroproducto');

var mysql = require('mysql');

const sequelize = new Sequelize('elbuensaborini', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
});

var mysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "elbuensaborini"
});

////Con esto creo las tablas en MySql según los modelos
const Insumo = modeloInsumo(sequelize, Sequelize);
const Producto = modeloProducto(sequelize, Sequelize);
const RubroInsumo = modeloRubroInsumo(sequelize, Sequelize);
const RubroProducto = modeloRubroProducto(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        let datosInsumos = [{
                "denominacion": "Queso Roquefort",
                "rubro": "insumo",
                "stockActual": 1500,
                "stockMinimo": 800,
                "unidadMedida": "gramos",
                "esInsumo": true,
                "alta": true,
                "precio": "80",
                "imagen": null,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "Coca Cola 1.5 l",
                "rubro": "Bebida sin alcohol",
                "stockActual": 15,
                "stockMinimo": 10,
                "unidadMedida": "unidad",
                "esInsumo": false,
                "alta": false,
                "precio": "125",
                "imagen": "https://st3.depositphotos.com/1029150/13893/i/1600/depositphotos_138936316-stock-photo-1-5l-coca-cola-drink.jpg",
                "createdAt": "2022-06-09T16:45:37.000Z",
                "updatedAt": "2022-06-09T16:45:37.000Z"
            },
            {
                "denominacion": "Prepizzas",
                "rubro": "insumo",
                "stockActual": 50,
                "stockMinimo": 25,
                "unidadMedida": "unidad",
                "esInsumo": true,
                "alta": true,
                "precio": "25",
                "imagen": null,
                "createdAt": "2022-06-09T16:59:26.000Z",
                "updatedAt": "2022-06-09T16:59:26.000Z"
            },
            {
                "denominacion": "Fernet",
                "rubro": "Bebida con alcohol",
                "stockActual": 15,
                "stockMinimo": 10,
                "unidadMedida": "unidad",
                "esInsumo": false,
                "alta": true,
                "precio": "125",
                "imagen": "Fernet",
                "createdAt": "2022-06-09T17:29:53.000Z",
                "updatedAt": "2022-06-09T17:29:53.000Z"
            }
        ];
        datosInsumos.forEach(element => {
            Insumo.create(element)
        });

        let datosProductos = [{
                "denominacion": "Pizza Muzzarella",
                "rubro": "pizza",
                "tiempoCocina": 20,
                "alta": true,
                "precio": "250",
                "imagen": "https://img-global.cpcdn.com/recipes/24ab60322955bee3/400x400cq70/photo.jpg",
                "receta": "receta pizza Muzzarella",
                "descripcion": "Pizza con doble queso Muzarella",
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "Promo dos pizzas y una coca 1.5",
                "rubro": "promo",
                "tiempoCocina": 35,
                "alta": true,
                "precio": "725",
                "imagen": "https://pbs.twimg.com/media/Bv-VvriCcAEUUeW.png",
                "receta": "receta dos pizzas",
                "descripcion": "Dos pizzas y una coca",
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "Hamburguesa especial",
                "rubro": "hamburguesa",
                "tiempoCocina": 30,
                "alta": true,
                "precio": "600",
                "imagen": "https://thumbs.dreamstime.com/b/hamburguesa-especial-19990869.jpg",
                "receta": "Calentar dos medallones, poner dos rodajas de tomate y dos rodajas de cebolla, etc",
                "descripcion": "Hamburguesa con doble carne, cheddar, cebolla, tomate y lechuga",
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            }
        ];

        datosProductos.forEach(element => {
            Producto.create(element)
        });

        let datosRubrosProducto = [{
                "denominacion": "pizza",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "hamburguesa",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "promo",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "pasta",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            }
        ];

        datosRubrosProducto.forEach(element => {
            RubroProducto.create(element)
        });

        let datosRubrosInsumo = [{
                "denominacion": "insumo",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "bebida con alcohol",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            },
            {
                "denominacion": "bebida sin alcohol",
                "alta": true,
                "createdAt": "2021-04-04T00:00:00.000Z",
                "updatedAt": "2021-04-04T00:00:00.000Z"
            }
        ];

        datosRubrosInsumo.forEach(element => {
            RubroInsumo.create(element)
        });
        console.log('Tablas sincronizadas')
    })





module.exports = {
    Insumo,
    Producto,
    RubroInsumo,
    RubroProducto
}