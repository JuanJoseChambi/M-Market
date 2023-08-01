const {Category,Prod} =require('../db');

const allProducts=()=>{
    console.log("aqui envio todos los productos de bd");
};
const createProduct = ()=>{
    console.log("estoy creando producto en bd");
}
module.exports={
    allProducts,
    createProduct
}
