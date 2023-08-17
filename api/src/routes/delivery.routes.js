const {postDelivery, getDelivery} = require('../handlers/deliveryHandler')

const {Router}=require('express')

const delivery = Router()

delivery.post('/', postDelivery)
delivery.get('/', getDelivery)









module.exports = delivery
