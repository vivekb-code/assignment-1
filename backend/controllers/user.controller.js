const bcrypt = require('bcrypt');

const { User } = require('../models');
const utils = require('./../utils');

let UserController = {};

// We can have a pagination approach for high volume data, 
// but in memory sorting won't be possible (as per assignment)
UserController.all = async (req, res) => {
    try {
        let users = await User.findAll({ raw: true });
        return res.json(utils.sortByName(users));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
};

UserController.byId = async (req, res) => {
    try {
        let user = await User.findOne({ where: { id: req.params.id }, raw: true });
        if (!user) {
            return res.status(404).json({ error: 'No user found for given id' })
        }
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
};

UserController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }
        let user = await User.scope('withSecret').findOne({ where: { email: email }, raw: true });

        if (!user) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        }

        delete user.password;

        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
};


module.exports = UserController;