const {createPurchase,getAllPurchase} = require('../controllers/purchaseCtrl')


const postPurchase = async (req, res) => {
    try {
        const { monto, userId, prodId } = req.body
        const aux = monto ? await createPurchase(monto, userId,prodId) : "monto require";

        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



const getPurchase = async (req, res) => {
    try {

        const getAll = await getAllPurchase()

        res.status(201).json(getAll)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {postPurchase, getPurchase}