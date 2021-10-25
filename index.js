const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Hola. Acabas de iniciar el server en express");
})

app.get('/nueva-ruta', (request, response) => {
  response.send("Hola. Estas en nueva ruta");
})

app.get('/products', (request, response) => {
  //response.send("Hola. Estas en productos");
  response.json({
    name: 'Producto 1',
    price: 1899,
  })
})

app.get('/home', (request, response) => {
  response.send(`<h1>Usted esta en el Home. Bienvenido, usuario</h1>`);
})

app.get('/categorias', (request, response) => {
  response.json({
    title: "Usted se encuentra en categorias",
    description: "Acá encontrarás los diversos productos para ti, agrupados en categorias"
    /*productos: 
      id: 1,
      name: "books",
      id: 2,
      name: "games",
      id: 3,
      name: "courses",
    }*/
  });
})

app.listen(port, () => {
  console.log("El port es:" + port);
})
