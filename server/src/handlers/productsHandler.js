const { allProducts, searchProductByName, productById, createProduct, updateProduct, deleteProduct, } = require('../controllers/productsControl');

const getProductsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await searchProductByName(name) : await allProducts();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await productById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createProductHandler = async (req, res) => {
    const { name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct } = req.body;

    try {
        await createProduct(name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct);
        res.status(201).json('El producto ha sido añadido con exito');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProductHandler = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct } = req.body;

    try {
        await updateProduct(id, name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct);

        res.status(200).json('Producto actualizado correctamente');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteProduct(id);
        res.status(200).json('Producto eliminado correctamente')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

const reserveProductHandler = (req, res) => {
    res.send('NIY: ESTA RUTA RESERVA O NO UN PRODUCTO POR ID AL DAR CLICK AL CARRITO')
};

const updateContentProdHandler = (req, res) => {
    res.send('NIY: ESTA RUTA ACTUALIZA EL CONTENIDO DE LA BDD')
};

const buyProductsHandler = (req, res) => {
    res.send('NIY: ESTA RUTA SE USA PARA REALIZAR LA COMPRA')
};



module.exports = {
    getProductsHandler,
    getProductHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler,
    reserveProductHandler,
    updateContentProdHandler,
    buyProductsHandler
}