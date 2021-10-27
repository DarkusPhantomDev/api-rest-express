const express = require('express');
const faker = require('faker');
const routerApi = require('./app/routes');

const app = express();
const port = 3000;

app.use(express.json()); //Con esta informacion te permite recibir archivos tipo JSOn

app.get('/', (request, response) => {
  response.send("Hola. Acabas de iniciar el server en express");
})

routerApi(app);

app.listen(port, () => {
  console.log("El port es: " + port);
})
