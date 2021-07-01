"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// GET ====================================================
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/write', ctrl.output.write);
router.get('/list', ctrl.output.list);




// POST ===================================================
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.post('/add', ctrl.poster.create);


module.exports = router;