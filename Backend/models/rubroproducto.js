module.exports = (sequelize, type) => {
    return sequelize.define('rubroproducto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        denominacion: type.STRING,
        alta: type.BOOLEAN,
        
    });
}