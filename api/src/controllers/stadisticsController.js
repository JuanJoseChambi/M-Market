const {getAllPurchase} = require("./purchaseCtrl")



const getIdRepetidos = async () => {
    const allPurchase = await getAllPurchase()
    return allPurchase
}



module.exports = {getIdRepetidos}