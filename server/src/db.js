const { Sequelize } = require('sequelize');
const ProductsModel = require('./models/Products');
const UserModel = require('./models/User');

//dotenv se requiere para que nuestro proyecto lea nuestras variables de entorno y las ponga a disposicion;
require('dotenv').config();

//a partir de la linea anterior nuestras variables se encuentran disponibles en:
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// console.log(DB_USER, DB_PASSWORD, DB_HOST)

// ahora que tenemos nuestras variables a disposicion podemos reemplazarlas en sequielize: 
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`, { logging: false });
//la anterior es la conexion con la BDD

//defino los modelos(los llamo de sus modulos)
ProductsModel(sequelize);
UserModel(sequelize);

//relacionar los modelos
const { Products, User } = sequelize.models;

Products.belongsToMany(User, { through: 'Products_Users' });
User.belongsToMany(Products, { through: 'Products_Users' });

//exportar
module.exports = { sequelize, ...sequelize.models };