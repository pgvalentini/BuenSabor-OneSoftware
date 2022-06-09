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

/*
{
    "id": 1,
    "denominacion": "Coca Cola 1.5 l",
    "rubro": "Bebida sin alcohol",
    "stockActual": 15,
    "stockMinimo": 10,
    "unidadMedida": "unidad",
    "esInsumo": false,
    "alta": false,
    "precio": "125",
    "imagen": "https://st3.depositphotos.com/1029150/13893/i/1600/depositphotos_138936316-stock-photo-1-5l-coca-cola-drink.jpg",
    "createdAt": "2020-05-04T00:00:00.000Z",
    "updatedAt": "2022-06-09T01:31:05.000Z"
  }
*/

//Prueba insertar registro automáticamente yendo a esa ruta
/* router.apply('/registro', function(res) {
    Insumo.create({
        "denominacion": "Coca Cola 1.5 l",
        "rubro": "Bebida sin alcohol",
        "stockActual": 15,
        "stockMinimo": 10,
        "unidadMedida": "unidad",
        "esInsumo": false,
        "alta": false,
        "precio": "125",
        "imagen": "https://st3.depositphotos.com/1029150/13893/i/1600/depositphotos_138936316-stock-photo-1-5l-coca-cola-drink.jpg"
        });
    res.send('registro creado');
}); */


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