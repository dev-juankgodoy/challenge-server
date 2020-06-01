const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

const clienteRouter = require('./clienteRouter');

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

router.use('/cliente', clienteRouter);

module.exports = router;