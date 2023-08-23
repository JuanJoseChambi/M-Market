const {Router} =require('express');
const {getInfoGraficas} = require("../handlers/stadisticsHandler")

const routerStadistics = Router();

routerStadistics
.get('/', getInfoGraficas)


module.exports = routerStadistics