const express = require('express');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const routes = require('./routes/index.js')

const server = express();

//middlewares
server.use(cors())
server.use(morgan('dev'));
server.use(cookieParser());
server.use(express.json());

//despues de los midellwares, debe redirigirse a los endpoints para enviar la respuesta
// server.use('/', routes);
server.use(routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});


module.exports = server;