const router = require('express').Router();
const Sequelize = require('sequelize');
//Me traigo el modelo rubro insumo
const { RubroInsumo } = require('../../db');

const Op = Sequelize.Op;

//Todas las peticiones que entran acá ya tienen el prefijo /api/rubroinsumo


//Devuelve todos los rubros insumo
router.get('/', async (req, res) => {
    const rubrosInsumos = await RubroInsumo.findAll();
    res.json(rubrosInsumos);
});

//Devuelve un rubro insumo específico a partir de su ID
router.get('/:rubroInsumoId', async (req, res) => {
    const rubroInsumo = await RubroInsumo.findByPk(req.params.rubroInsumoId);
    res.json(rubroInsumo);
});


//Da de alta un nuevo rubro insumo
router.post('/', async (req, res) => {
    const rubroInsumo = await RubroInsumo.create(req.body);
    res.json(rubroInsumo);
});

//Actualiza un rubro insumo específico
router.put('/:rubroInsumoId', async (req, res) => {
    await RubroInsumo.update(req.body, {
        where: {id: req.params.rubroInsumoId}
    });
    res.json({success: 'Rubro Insumo modificado'})
    
});

//Da de baja un rubro insumo específico pasando su estado de alta de true a false
router.put('/baja/:rubroInsumoId', async (req, res) => {
    await RubroInsumo.update({
        alta: 0, 
    }, {
        where: {id: req.params.rubroInsumoId}
    });
    res.json({success: 'Rubro Insumo dado de baja'})
    
});

module.exports = router;