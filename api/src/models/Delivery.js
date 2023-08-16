const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Delivery', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        receives: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pickUp: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        delivery: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
       


    }, { timestamps: false, freezeTableName: true })
};
