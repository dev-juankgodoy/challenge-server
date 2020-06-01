const error = {
    "codError": 1,
    "msjError": 'No puede llegar un campo nulo'
};

const middlewareCliente = async (req, res, next) => {
    console.log('middlewareCliente INICIO');

    try {

        let body = req.body;

        if (body.rut === null || body.celular === null || body.correo === null || body.renta === null) {
            res.status(400).send(error);
        } else {
            next();
        }

        console.log('middlewareCliente FIN');

    } catch (err) {
        console.err('Ha ocurrido un error al validar cuerpo de la consulta!!!');
    }
}

module.exports = {
    middlewareCliente
}