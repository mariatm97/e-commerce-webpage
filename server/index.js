const server = require('./src/app');
const { sequelize } = require('./src/db');
const port = process.env.PORT || 3001;

// // Syncing all the models at once.
// //alter: para que la actualice y no borre nada o force: eliminar si existe la tabla
// sequelize.sync({ alter: true }).then(() => {
server.listen(port, () => {
    sequelize.sync({ force: true });
    console.log(`%s listening on port ${port}`); // eslint-disable-line no-console
});
// });
