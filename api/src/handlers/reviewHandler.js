const {createReview,getAllReviews} = require('../controllers/reviewsCtrl')

const postReview = async (req, res) => {
    try {
        const { userEmail, review } = req.body;
        // console.log(req.body);
        if (![userEmail, review].every(Boolean))
            return res.status(200).send("para postear una review debes ingresar userEmail y review")
        const aux = await createReview(userEmail, review)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const getReview = async (req, res) => {
    try {
        const aux4 = await getAllReviews()
        res.status(200).json(aux4)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { postReview, getReview }