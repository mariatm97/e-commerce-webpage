const { Products } = require('../db');
const { Op } = require('sequelize');

//***************************Buscar todos los productos****************************//
const allProducts = async () => {
    const productsFind = await Products.findAll();
    const products = productsFind.map((product) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            img1: product.img1,
            brand: product.brand,
            gender: product.gender
        }
    });
    return products;
};

//********************Buscar productos por el nombre********************//
const searchProductByName = async (name) => {
    const productByNameDB = await Products.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
    const productByName = productByNameDB.map((product) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            img1: product.img1,
            brand: product.brand,
            gender: product.gender
        }
    })
    if (productByName.length) { return productByName.slice(0, 10) }
    else throw Error(`${name} no existe`)
};

//************************Buscar productos por el ID************************//
const productById = async (id) => {
    const product = await Products.findByPk(id);
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        brand: product.brand,
        gender: product.gender,
        stockMax: product.stockMax,
        stockMin: product.stockMin,
        stockAct: product.stockAct
    }
};

//**************************Crear un nuevo producto**************************//
const createProduct = async (name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct) => {
    await Products.create({
        name,
        price,
        description,
        img1,
        img2,
        img3,
        brand,
        gender,
        stockMax,
        stockMin,
        stockAct
    });
};

//*************************Modifica productos por el ID***************************//
const updateProduct = async (id, name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct) => {
    await Products.update({ id, name, price, description, img1, img2, img3, brand, gender, stockMax, stockMin, stockAct }, { where: { id: id } })

};

//***************************Elimina productos***************************//
const deleteProduct = async (id) => {
    deleteById = await Products.destroy({ where: { id: id } });

    if (deleteById) { return 'Producto eliminado correctamente' }
    else { throw Error('Producto no encontrado') }
};

module.exports = { allProducts, searchProductByName, productById, createProduct, updateProduct, deleteProduct }