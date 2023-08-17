const {postReview, getReview} = require('../handlers/reviewHandler')
const {Router}=require('express')


const reviewR = Router()

reviewR.post('/', postReview)
reviewR.get('/', getReview)


module.exports = reviewR
