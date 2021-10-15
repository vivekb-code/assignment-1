const { Sequelize } = require('sequelize');
const config = require('./../config/config.json')[process.env.NODE_ENV];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
})()
