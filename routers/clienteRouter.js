const { Router } = require('express');

const clienteRouter = Router();

const clienteController = require('../controllers/clienteController');

const clienteMiddleware = require('../middleware/clienteMiddleware');



clienteRouter.post('/', clienteMiddleware.middlewareCliente,
    async (req, res, next) => await clienteController.registraCliente(req, res, next)
);

module.exports = clienteRouter;