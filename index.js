const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Hola. Acabas de iniciar el server en express");
})

app.listen(port, () => {
  console.log("El port es:" + port);
})
