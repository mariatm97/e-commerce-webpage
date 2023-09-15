const { Router } = require('express');

const { getUsersHandler, getUserHandler, createUserHandler, updateUserHandler } = require('../handlers/userHandler')

const userRouter = Router();

const validate = (req, res, next) => {
    const { name, lastName, email, password, address, phone } = req.body;

    if (!name) return res.status(400).json({ error: 'Missing name' });
    if (!lastName) return res.status(400).json({ error: 'Missing lastName' });
    if (!email) return res.status(400).json({ error: 'Missing email' });
    if (!password) return res.status(400).json({ error: 'Missing password' });
    if (!address) return res.status(400).json({ error: 'Missing address' });
    if (!phone) return res.status(400).json({ error: 'Missing phone' });

    next();
};

userRouter.get('/', getUsersHandler);

userRouter.get('/:id', getUserHandler);

userRouter.post('/', validate, createUserHandler);

userRouter.put('/:id', updateUserHandler);


module.exports = userRouter;