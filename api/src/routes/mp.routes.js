const {Router}=require('express')
const payHandler = require('../handlers/mercadoPagoHandler/payHandler')

const pay = Router()

// pay.use((req,res,next)=>{
//     res.send("mp corriendo")
//     next()
// })

pay.post('/', payHandler)


module.exports = pay