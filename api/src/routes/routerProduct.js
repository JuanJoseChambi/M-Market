const { Router } = require('express');
const { getProducts,  postProducts, getIdProduct, updateStock } = require('../handlers/products');


 routerProduct =Router();

 routerProduct
 .get('/', getProducts)
 .get('/:id', getIdProduct)
 .post('/', postProducts)
 .put('/:id', updateStock)



module.exports = routerProduct;