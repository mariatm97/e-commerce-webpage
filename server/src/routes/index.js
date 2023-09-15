const { Router } = require('express');

//Importar todos los routers;
const productsRoutes = require('./productsRoutes');
const userRoutes = require('./userRoutes');


const router = Router();

//Configurar los routers;
//Ejemplo: router.use('/auth', authRouter)
router.use('/user', userRoutes);
router.use('/products', productsRoutes);



module.exports = router;