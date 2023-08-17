const { User, Delivery } = require('../db')

const newDelivery = async (receives, address, phone, pickUp, delivery, userID) => {
      const userEmail = await User.findByPk(userID)
      if (!userEmail) throw new Error("necesitas un user registrado en la base de datos")
      let newDelivery = await Delivery.create({ receives, address, phone, pickUp, delivery })
      await userEmail.addDelivery(newDelivery)
      return "Delivery Creado";

}

module.exports = { newDelivery }
