const {newDelivery, getAllDelivery} = require('../controllers/dliveryCtrl')

const postDelivery = async (req, res) => {
    try {
        const { receives, address, phone, pickUp, delivery, userID } = req.body;
        if (![receives, address, phone, pickUp, delivery, userID].every(Boolean)) 
        return res.status(404).send('Flata enviardatos obligatorios')
        const aux = await newDelivery(receives, address, phone, pickUp, delivery, userID)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}




module.exports = { postDelivery }