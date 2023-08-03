const { allProducts, createProduct } = require("../controllers/productControllers");


const getProducts=async (req, res)=>{
   try {
    const response = allProducts();
    res.status(200).json(response);
   } catch (error) {
    res.status(400).json({ error: error.message });
   }
   

}
const postProducts =async (req, res)=>{
    const {name, category, description, image, priceRegular, brand, unit} = req.body
try {
   const response = await createProduct(name, category, description, image, priceRegular, brand, unit);
    res.status(200).json(response);
    
} catch (error) {
    res.status(400).json({ error: error.message });
    
}
    
}
module.exports ={
    getProducts,
    postProducts,

}