const router = require('express').Router();
const Sequelize = require('sequelize');
//Me traigo el modelo producto
const { Producto } = require('../../db');

const Op = Sequelize.Op;

//Todas las peticiones que entran acá ya tienen el prefijo /api/producto


//Devuelve todos los productos
router.get('/', async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
});

//Devuelve un producto específico a partir de su ID
router.get('/:productoId', async (req, res) => {
    const producto = await Producto.findByPk(req.params.productoId);
    res.json(producto);
});


//Da de alta un nuevo producto
router.post('/', async (req, res) => {
    const producto = await Producto.create(req.body);
    res.json(producto);
});

//Actualiza un producto específico
router.put('/:productoId', async (req, res) => {
    await Producto.update(req.body, {
        where: {id: req.params.productoId}
    });
    res.json({success: 'Producto modificado'})
    
});

//Da de baja un insumo específico pasando su estado de alta de true a false
router.put('/baja/:productoId', async (req, res) => {
    await Producto.update({
        alta: 0, 
    }, {
        where: {id: req.params.productoId}
    });
    res.json({success: 'Producto dado de baja'})
    
});

module.exports = router;