const { allUsers, searchUserByName, userById, createUser, updateUser } = require('../controllers/userControl');


//**********************************Busca todos los Usuarios***********************************//

const getUsersHandler = async (req, res) => {
    const { name } = req.query;

    try {
        const results = name ? await searchUserByName(name) : await allUsers();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createUserHandler = async (req, res) => {
    const { name, lastName, email, password, address, phone } = req.body;

    try {
        await createUser(name, lastName, email, password, address, phone);
        res.status(201).json('Su usuario ha sido creado con exito');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUserHandler = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email, password, address, phone } = req.body;

    try {
        await updateUser(id, name, lastName, email, password, address, phone);
        res.status(200).json('Su usuario ha sido actualizado correctamente');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    getUsersHandler, getUserHandler, createUserHandler, updateUserHandler
}