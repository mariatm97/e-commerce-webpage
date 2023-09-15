const { User } = require('../db');
const { Op } = require('sequelize');



const allUsers = async () => {
    const userFind = await User.findAll();
    const users = userFind.map((user) => {
        return {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            address: user.adrress,
            phone: user.phone
        }
    });
    return users;
};

const searchUserByName = async (name) => {
    const userByNameDB = await User.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
    const userByName = userByNameDB.map((user) => {
        return {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            address: user.adrress,
            phone: user.phone
        }
    })
    if (userByName.length) { return userByName.slice(0, 10) }
    else throw Error(`${name} no existe`)
};

const userById = async (id) => {
    const user = await User.findByPk(id);
    return {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        address: user.adrress,
        phone: user.phone
    }
};

const createUser = async (name, lastName, email, password, address, phone) => {
    const newUser = await User.create({ name, lastName, email, password, address, phone }); //esto me devuelve una promesa
    return newUser;
};

const updateUser = async (id, name, lastName, email, password, address, phone) => {
    await User.update({ id, name, lastName, email, password, address, phone }, { where: { id: id } })
};


module.exports = { allUsers, searchUserByName, userById, createUser, updateUser };