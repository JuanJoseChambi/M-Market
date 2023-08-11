const { allProducts, createProduct, productById, product, ApdateProd } = require("../controllers/productControllers");


const getProducts=async (req, res)=>{
    try {
     const {name} = req.query;
     if(!name){
         const response =await allProducts();
         return res.status(200).json(response);
     }
     const response = await product(name)
     res.status(200).json(response);
    } catch (error) {
     res.status(400).json({ error: error.message });
    }
 }
 const getIdProduct = async(req, res)=>{
     const {id} = req.params;
     try {
         const response = await productById(id);
         res.status(200).json(response);
         
     } catch (error) {
         res.status(400).json({ error: error.message }); 
     }
 }
const postProducts =async (req, res)=>{
    const {brand,name,price,unit,description,image,score,category} = req.body
try {
   const response = await createProduct(brand,name,price,unit,description,image,score,category);
    res.status(200).json(response);
    
} catch (error) {
    res.status(400).json({ error: error.message });
    
}
    
};



const updateStock =async(req,res)=>{
    try {
        const {id} = req.params;
        const {unit} = req.body;

        const updateUnit = await ApdateProd(id, unit)

    res.status(200).json(updateUnit);
         


    } catch (error) {
    res.status(400).json({ error: error.message });
        
    }
}


module.exports ={
    getProducts,
    postProducts,
    getIdProduct,
    updateStock

}