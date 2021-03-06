const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');
const { Insumo, Producto, RubroInsumo, RubroProducto } = require('./db');


const app = express();

//Esto crea la base de datos
require('./db');

app.use(cors({
    origin: '*'
}));

//Ahora uso body-parser para las peticiones post (poder mandar objetos por esas peticiones)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//todas las peticiones que entren al servidor con /api las mando a apiRouter
app.use('/api', apiRouter);

app.listen(3002, () => {
    console.log("Servidor arrancado")
});

