const { Router } = require('express');
const routerProduct = require('./routerProduct');
const pay = require('./mp.routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', routerProduct);

router.use('/pay', pay)

module.exports = router;
