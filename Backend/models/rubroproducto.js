module.exports = (sequelize, type) => {
    return sequelize.define('rubroproducto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        denominacion: type.STRING,
        alta: type.BOOLEAN,
        
    });
}