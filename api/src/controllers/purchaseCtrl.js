const { Purchase, User, Prod } = require('../db')




const createPurchase = async (monto, userId, prodId) => {

    //    ----- relacion user--> compra
    const user = await User.findByPk(userId);
    const getProd = await Prod.findAll({where:{id:prodId}});
    
    if(!user || !getProd) throw new Error("Error en la Compra")

    const newPurchase = await Purchase.create({monto})
    
    await user.addPurchase(newPurchase)

    // ---relacion Purchase--> product
    
    await newPurchase.addProd(getProd)
     
   
   
   
     return "created purchase"

}






const getAllPurchase = async () => {
    const getAll = await Purchase.findAll({
        include: [
          {
            model: Prod,
            attributes: ["name", "id"],
            through: {
              attributes: [],
            },
          },
        //   {
        //     model: Show,
        //     attributes: ["id", "date", "hour", "type", "stock"],
        //     through: {
        //       attributes: [],
        //     },
        //   },
        //   {
        //     model: Rating,
        //     as: "ratings",
        //     attributes: ["id", "count"],
        //   },
        ],
      })

    if (getAll.length > 0) {
        return getAll
    } else {
        return "No purchases"
    }
}



















module.exports = { createPurchase, getAllPurchase }