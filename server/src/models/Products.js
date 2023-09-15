const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER, //Lo coloco INTEGER, para que me de un numero entero
            primaryKey: true,
            autoIncrement: true, // y esto para que se incremente solo con cada nuevo usuario
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        img1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        img2: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        img3: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stockMax: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stockMin: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stockAct: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    })
}