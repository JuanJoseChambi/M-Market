const { Router } = require('express');
const routerProduct = require('./routerProduct');
const purchaseR = require('./purchase.routes')
const routerStadistics = require("./stadistics")

const pay = require('./mp.routes')

const routerUser = require('./routerUser')

const sendMail = require('./routerNodemailer')

const delivery = require('./delivery.routes')

const reviewR = require('./review.routes')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', routerProduct);
router.use('/user',routerUser)
router.use('/pay', pay)
router.use('/purchase', purchaseR)
router.use("/stadistics", routerStadistics)
router.use("/delivery", delivery)
router.use("/reviews", reviewR)



router.use('/notification', sendMail)

module.exports = router;
