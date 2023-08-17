const { Review, User } = require('../db')



const createReview = async (userEmail, review) => {
    const userReview = await User.findOne({ where: { email: userEmail } })
    console.log(userReview);
    if (!userReview) throw new Error("necesitas un user registrado en la base de datos, para conticuar con la review")
    let newReview = await Review.create({ review })
    await userReview.addReview(newReview)
    return "review posteada";
}


const getAllReviews = async () => {
    const getRev = await Review.findAll({
        include: [
            {
                model: User,
                attributes: ["email"],
            },

        ],

    })
    return getRev
}


module.exports = { createReview, getAllReviews }