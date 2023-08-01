const { allProducts, createProduct } = require("../controllers/productControllers");


const getProducts=()=>{
   
    allProducts();

}
const postProducts = ()=>{

    createProduct();
}
module.exports ={
    getProducts,
    postProducts,

}