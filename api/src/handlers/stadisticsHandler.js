const { getInfo } = require("../controllers/stadisticsController")


const getInfoGraficas = async (req, res) => {
    try {

        const getAll = await getInfo()

        res.status(201).json(getAll)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


 

module.exports = {getInfoGraficas}