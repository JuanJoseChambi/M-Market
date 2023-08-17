const { User, Delivery } = require('../db')

const newDelivery = async (receives, address, phone, pickUp, delivery, userEmail) => {
      const user = await User.findOne({ where: { email: userEmail } })

      if (!user) throw new Error("necesitas un user registrado en la base de datos")
      let newDelivery = await Delivery.create({ receives, address, phone, pickUp, delivery })
      await user.addDelivery(newDelivery)
      return "Delivery Creado";

}

const getAllDelivery = async () => {
      const getDel = await Delivery.findAll({
          include: [
              {
                  model: User,
                  attributes: ["email"],
              },
  
          ],
  
      })
      return getDel
  }

module.exports = { newDelivery, getAllDelivery }
