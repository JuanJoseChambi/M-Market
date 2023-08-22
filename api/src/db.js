require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_NAME,DB_PORT
} = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});




const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Prod, Category, User, Review, Purchase, UserAdmin, Delivery } = sequelize.models;
// console.log(sequelize.models);

Prod.belongsToMany(Category, { through: 'productCategories' })
Category.belongsToMany(Prod, { through: 'productCategories' })

//relacion usuario - >compra
User.hasMany(Purchase, {
  foreignKey: "userPurchase",
  as: "Purchase",
});

Purchase.belongsTo(User, {
  foreignKey: "userPurchase",
});

//relacion producto compra
Prod.belongsToMany(Purchase, { through: 'ProdPurchase' })
Purchase.belongsToMany(Prod, { through: 'ProdPurchase' })

// relacion user/Delivery
User.hasMany(Delivery, {
  foreignKey: "UserDelivery",
  as: "Delivery",
});

Delivery.belongsTo(User, {
  foreignKey: "UserDelivery",
});


// relacion user/reviews
User.hasMany(Review, {
  foreignKey: "UserReviews",
  as: "Review",
});

Review.belongsTo(User, {
  foreignKey: "UserReviews",
});



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');git 
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
