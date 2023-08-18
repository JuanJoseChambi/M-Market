const { Router } = require('express')
const { postPurchase, getPurchase, purchaseById } = require('../handlers/purchaseHandler')


const purchaseR = Router()

purchaseR.post('/', postPurchase)

purchaseR.get('/', getPurchase)

purchaseR.get('/:id', purchaseById)


module.exports = purchaseR