const express = require('express');
const rollsRouter = express.Router();

const { getRolls, createRoll } = require('../controllers/rollsController');

rollsRouter.route('/').get(getRolls).post(createRoll);

module.exports = rollsRouter;
