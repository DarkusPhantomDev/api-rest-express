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
    productId: 1,
    name: 'Producto 1',
    price: 1899,
  })
})

app.get('/home', (request, response) => {
  response.send(`<h1>Usted esta en el Home. Bienvenido, usuario</h1>`);
})

app.get('/categorias', (request, response) => {
  response.json([
    {
      categoriasId: 1,
      name: "books",
    },
    {
      categoriasId: 2,
      name: "games",
    },
    {
      categoriasId: 3,
      name: "courses",
    }
  ]);
})

//Se coloca : porque signfica que va a recibir un parametro. En este caso, recibe el parametro id
app.get('/categorias/:id', (request, response) => {
  //const id = request.params.id;
  const { id } = request.params;
  response.json({
    id,
    name: "games",
  })
})

//Recibiendo dos parametros en el mismo url
app.get('/categorias/:categoriasId/products/:productsId', (request, response) => {
  const { categoriasId, productsId } = request.params;
  response.json({
    categoriasId,
    productsId
  })
})


app.listen(port, () => {
  console.log("El port es:" + port);
})
