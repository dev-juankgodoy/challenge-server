const fs = require('fs');

const archivo = fs.createWriteStream('DatosCliente.txt', {
    flags: 'a' 
});

const registraDatos = (cliente) => {
    console.log('registraDatos INICIO');
    let registro = cliente.os + ';' + cliente.browser + ';' + cliente.rut + ';' + cliente.celular + ';' + cliente.correo + ';' + cliente.renta + '\n';

    archivo.write(registro);
    console.log('registraDatos FIN');
};



module.exports = {
    registraDatos
}

