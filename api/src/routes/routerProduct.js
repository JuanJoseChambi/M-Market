const { Router } = require('express');
const { getProducts,  postProducts } = require('../handlers/products');


 routerProduct =Router();

 routerProduct
 .get('/', getProducts)
 .post('/', postProducts)




module.exports = routerProduct;