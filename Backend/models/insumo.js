module.exports = (sequelize, type) => {
    return sequelize.define('insumo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        denominacion: type.STRING,
        rubro: type.STRING,
        stockActual: type.DOUBLE,
        stockMinimo: type.DOUBLE,
        unidadMedida: type.STRING,
        esInsumo: type.BOOLEAN,
        alta: type.BOOLEAN,
        precio: type.STRING,
        imagen: type.STRING(1000),
                
    });
}