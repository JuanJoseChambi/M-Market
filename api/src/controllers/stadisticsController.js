const {getAllPurchase} = require("./purchaseCtrl")



const getIdRepetidos = async () => {
    const allPurchase = await getAllPurchase()
   
    const allProduct = await allPurchase.map(item=> item.Prods)
     
    let aux =  allProduct.flat()
   
     const count = aux.reduce((acc, curr) => {
        if (curr.name in acc) {
          acc[curr.name]++;
        } else {
          acc[curr.name] = 1;
        }
        
        return acc;
      }, {});
      
      const repeated = [];
      
      for (let name in count) {
        if (count[name] >= 1) {
          repeated.push({ name, count: count[name] });
        }
      }

   return repeated


}



module.exports = {getIdRepetidos}