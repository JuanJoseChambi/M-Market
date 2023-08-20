const { Purchase, User, Prod } = require('../db')




const createPurchase = async (monto, userId, prodId) => {

  //    ----- relacion user--> compra
  const user = await User.findByPk(userId);
  const getProd = await Prod.findAll({ where: { id: prodId } });
  if (!user) throw new Error("Se requiere un userId de un usuario registrado")
  if (getProd.length < 1) throw new Error("Ingresar un prodId de un producto registrado en la base de datos")
  
  const newPurchase = await Purchase.create({ monto })
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

    ],
  })

  if (getAll.length > 0) {
    return getAll
  } else {
    return "No purchases"
  }
}


const getById = async (id) => {
  if (id.length !== 36) throw new Error("ingresar los 36 caracteres del UUID usuario")
  const info = await getAllPurchase()
  let purchaseFilter = info.filter(item => item.userPurchase === id)
  if (!purchaseFilter) throw new Error("aun no hay compras con ese usuario")
  return purchaseFilter;
}




module.exports = { createPurchase, getAllPurchase, getById }