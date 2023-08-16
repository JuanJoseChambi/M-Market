const {Router} =require('express');
const {getProductoMasVendido} = require("../handlers/stadisticsHandler")

const routerStadistics = Router();

routerStadistics
.get('/', getProductoMasVendido)


module.exports = routerStadistics