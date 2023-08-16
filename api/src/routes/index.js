const { Router } = require('express');
const routerProduct = require('./routerProduct');
const purchaseR = require('./purchase.routes')
const routerStadistics = require("./stadistics")

const pay = require('./mp.routes')

const routerUser = require('./routerUser')

const sendMail = require('./routerNodemailer')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', routerProduct);
router.use('/user',routerUser)
router.use('/pay', pay)
router.use('/purchase', purchaseR)
router.use("/stadistics", routerStadistics)



router.use('/notification', sendMail)

module.exports = router;
