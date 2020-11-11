const express = require('express');

const router = express.Router();

/* chamamos a TaskController para validar as rotas com o try cath */

const TaskController = require('../controller/TaskController');

router.post('/task', TaskController.create);

module.exports = router;
