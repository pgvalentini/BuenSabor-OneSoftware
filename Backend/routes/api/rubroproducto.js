const router = require('express').Router();
const Sequelize = require('sequelize');
//Me traigo el modelo rubro producto
const { RubroProducto } = require('../../db');

const Op = Sequelize.Op;

//Todas las peticiones que entran acá ya tienen el prefijo /api/rubroproducto


//Devuelve todos los rubros producto
router.get('/', async (req, res) => {
    const rubrosProductos = await RubroProducto.findAll();
    res.json(rubrosProductos);
});

//Devuelve un rubro producto específico a partir de su ID
router.get('/:rubroProductoId', async (req, res) => {
    const rubroProducto = await RubroInsumo.findByPk(req.params.rubroProductoId);
    res.json(rubroProducto);
});


//Da de alta un nuevo rubro producto
router.post('/', async (req, res) => {
    const rubroProducto = await RubroProducto.create(req.body);
    res.json(rubroProducto);
});

//Actualiza un rubro producto específico
router.put('/:rubroProductoId', async (req, res) => {
    await RubroProducto.update(req.body, {
        where: {id: req.params.rubroProductoId}
    });
    res.json({success: 'Rubro Producto modificado'})
    
});

//Da de baja un rubro producto específico pasando su estado de alta de true a false
router.put('/baja/:rubroProductoId', async (req, res) => {
    await RubroProducto.update({
        alta: 0, 
    }, {
        where: {id: req.params.rubroProductoId}
    });
    res.json({success: 'Rubro Producto dado de baja'})
    
});

module.exports = router;