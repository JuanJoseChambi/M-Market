const {postDelivery} = require('../handlers/deliveryHandler')

const {Router}=require('express')

const delivery = Router()

delivery.post('/', postDelivery)









module.exports = delivery
