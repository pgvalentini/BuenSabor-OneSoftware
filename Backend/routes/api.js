const router = require('express').Router();

const apiInsumoRouter = require('./api/insumo');
const apiProductoRouter = require('./api/producto');
const apiRubroInsumoRouter = require('./api/rubroinsumo');
const apiRubroProductoRouter = require('./api/rubroproducto');

//Todas las peticiones que ingresen con /insumo las mando al gestor apiInsumoRouter
//Ya todas las rutas que entran a este fichero vienen con el prefijo /api
//entonces todas las que entran al gestor apiInsumoRouter ya tendrán el prefijo /api/insumo 
router.use('/insumo', apiInsumoRouter);

//Ídem explicación anterior pero aplicado a los otros elementos
router.use('/producto', apiProductoRouter);
router.use('/rubroinsumo', apiRubroInsumoRouter);
router.use('/rubroproducto', apiRubroProductoRouter);

module.exports = router;