
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const ChargedDB = require('./src/utils/backUp.js')
const CategoryBD = require('./src/utils/categories.js')
const Admin = require('./src/utils/userAdmin.js')
require('dotenv').config();
const {
  PORT
} = process.env;


conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {

    ChargedDB()
    CategoryBD()
    Admin()
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
