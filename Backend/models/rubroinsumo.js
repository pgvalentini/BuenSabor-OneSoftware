module.exports = (sequelize, type) => {
    return sequelize.define('rubroinsumo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        denominacion: type.STRING,
        alta: type.BOOLEAN,
        
    });
}