const express = require('express');
const router = express.Router();
const { UserController } = require('./../controllers');

router.get('/', UserController.all);
router.get('/:id', UserController.byId);
router.post('/login', UserController.login);

module.exports = router;
