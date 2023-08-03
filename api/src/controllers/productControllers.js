const {Category,Prod} =require('../db');

const allProducts=()=>{
    
    return ("todos los productos")
};
const createProduct = async (name, category, description, image, priceRegular, brand, unit) => {
    const newProduct = await Prod.create({
        name, description, image, priceRegular, brand, unit
    });
    const categoryDB = await Category.findAll({
        where: {name: category}
    })
    newProduct.addCategory(categoryDB)
    return newProduct;
}
module.exports={
    allProducts,
    createProduct
}
