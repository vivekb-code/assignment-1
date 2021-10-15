process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Environment:', process.env.NODE_ENV);
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

const docs = require('./docs');

const db = require("./models");
(async function () {
    try {
        await db.sequelize.sync();
        console.log('DB sync completed.');
    } catch (e) {
        console.error('Couldn\'t initialize db correctly!', e);
        process.exit(1);
    }
})();

// routes
const usersRouter = require('./routes/users');

const app = express();
// We can whitelist specific origins for production
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));

app.get('/', (req, res, next) => {
    return res.json({ status: 'Backend service up and running!' });
});

app.use('/api/v1/users', usersRouter);

module.exports = app;
