const { Router } = require('express');
const { getProducts,  postProducts, getIdProduct } = require('../handlers/products');


 routerProduct =Router();

 routerProduct
 .get('/', getProducts)
 .get('/:id', getIdProduct)
 .post('/', postProducts)




module.exports = routerProduct;