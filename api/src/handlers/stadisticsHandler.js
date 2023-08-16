const {getIdRepetidos} = require("../controllers/stadisticsController")


const getProductoMasVendido = async (req, res) => {
    try {

        const getAll = await getIdRepetidos()

        res.status(201).json(getAll)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {getProductoMasVendido}