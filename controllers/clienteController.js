const archivo = require('../utils/util');

const mensajeError = {
    msjError: ''
}

const mensajeExito = {
    msgExito: 'Se ha registrado con exito'
}

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
        mensajeError.msjError = 'Ha ocurrido un error en el servidor.';
        res.status(500).send(mensajeError);
    }

    res.status(201).send(mensajeExito);

    console.log('registraCliente FIN');
}

module.exports = {
    registraCliente
}