const archivo = require('../utils/util');

const registraCliente = async (req, res, next) => {

    console.log('registraCliente INICIO');

    try {

        let cliente = req.body;

        let os = req.header('x-user-os');
        let browser = req.header('x-user-browser');
        
        cliente.os = os;
        cliente.browser = browser;

        archivo.registraDatos(cliente);
        
    } catch (err) {
        console.error('Error al registrar cliente: ' + err);
    }

    res.status(201).send({msg: 'Se ha registrado con exito'});

    console.log('registraCliente FIN');
}

module.exports = {
    registraCliente
}