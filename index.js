const express = require('express');
const faker = require('faker');// generate massive amounts of fake data in the browser and node.js

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Hola. Acabas de iniciar el server en express");
})

app.get('/nueva-ruta', (request, response) => {
  response.send("Hola. Estas en nueva ruta");
})

app.get('/products', (request, response) => {
  const products = [];
  const { size } = request.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      id: index+1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }

  //response.send("Hola. Estas en productos");
  response.json(products);
})

app.get('/products/filter', (request, response) => {
  response.send('Soy un filter');
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

app.get('/users', (request, response) => {
  const { limit, offset } = request.query;
  if (limit && offset) {
    response.json({
      limit,
      offset
    });
  } else {
    response.send("No hay parametros");
  }

})

//Nota
//Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.




app.listen(port, () => {
  console.log("El port es:" + port);
})
