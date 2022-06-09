const router = require('express').Router();
const Sequelize = require('sequelize');
//Me traigo el modelo insumo
const { Insumo } = require('../../db');

const Op = Sequelize.Op;

//Todas las peticiones que entran acá ya tienen el prefijo /api/insumo


//Devuelve todos los insumos
router.get('/', async (req, res) => {
    const insumos = await Insumo.findAll();
    res.json(insumos);
});

//Devuelve un insumo específico a partir de su ID
router.get('/:insumoId', async (req, res) => {
    const insumo = await Insumo.findByPk(req.params.insumoId);
    res.json(insumo);
});


//Da de alta un nuevo insumo
router.post('/', async (req, res) => {
    const insumo = await Insumo.create(req.body);
    res.json(insumo);
});

//Actualiza un insumo específico
router.put('/:insumoId', async (req, res) => {
    await Insumo.update(req.body, {
        where: {id: req.params.insumoId}
    });
    res.json({success: 'Insumo modificado'})
    
});

//Da de baja un insumo específico pasando su estado de alta de true a false
router.put('/baja/:insumoId', async (req, res) => {
    await Insumo.update({
        alta: 0, 
    }, {
        where: {id: req.params.insumoId}
    });
    res.json({success: 'Insumo dado de baja'})
    
});

module.exports = router;