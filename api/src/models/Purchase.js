const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Purchase', {
    
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },{ freezeTableName: true},)
};