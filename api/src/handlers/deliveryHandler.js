const {newDelivery, getAllDelivery} = require('../controllers/dliveryCtrl')

const postDelivery = async (req, res) => {
    try {
        const { receives, address, phone, pickUp, delivery, userEmail } = req.body;
        if (![receives, address, phone, pickUp, delivery, userEmail].every(Boolean)) 
        return res.status(404).send('Flata enviardatos obligatorios')
        const aux = await newDelivery(receives, address, phone, pickUp, delivery, userEmail)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getDelivery = async(req,res)=>{
     try {
        const getAll = await getAllDelivery()
        res.status(201).json(getAll)

     } catch (error) {
        res.status(400).json({ error: error.message })
        
     }
}



module.exports = { postDelivery,getDelivery }