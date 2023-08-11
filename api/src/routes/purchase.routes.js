const {Router}=require('express')
const {postPurchase, getPurchase} = require('../handlers/purchaseHandler')


const purchaseR = Router()

purchaseR.post('/', postPurchase)

purchaseR.get('/', getPurchase)



module.exports=purchaseR