const { Router } = require('express');

const { getProductsHandler, getProductHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler, reserveProductHandler,
    updateContentProdHandler,
    buyProductsHandler } = require('../handlers/productsHandler');

const productsRouter = Router();


productsRouter.get('/', getProductsHandler);

productsRouter.get('/:id', getProductHandler);

productsRouter.post('/', createProductHandler);

productsRouter.put('/:id', updateProductHandler);

productsRouter.delete('/:id', deleteProductHandler);

//NYI: RESERVAR O NO UN PRODUCTO POR MEDIO DE UN CLICK AL CARRITO
productsRouter.get('/', reserveProductHandler);

//NYI: ACTUALIZAR EL CONTENIDO DE LA BASE DE DATOS
productsRouter.get('/', updateContentProdHandler);

//NYI: COMPRA DE PRODUCTOS
productsRouter.get('/buy', buyProductsHandler);




module.exports = productsRouter;