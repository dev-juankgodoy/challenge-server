const express = require('express');
const app = express();
const routerChallenge = require('./routers');
const { server } = require('./config');

app.use(routerChallenge);

app.listen(server.port, () => console.log(`Aplicación encendida escuchando puerto ${server.port}!`));