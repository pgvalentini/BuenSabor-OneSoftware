module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        denominacion: type.STRING,
        rubro: type.STRING,
        tiempoCocina: type.INTEGER,
        alta: type.BOOLEAN,
        precio: type.STRING,
        imagen: type.STRING,
        receta: type.STRING(3000),
        descripcion: type.STRING(1000),
    });
}