const express = require('express');
const faker = require('faker') ;

//Este señor se usa para crear routers
//Ojo, esto no quiere decir que ya estemos definiendolo. Eso esta definido en index.js (en la carpeta products)
const router = express.Router();

//Se eliminaron products en el primer parametro y se dejo todo lo que iba depues de /products
//Esto porque vamos a definirlo mas adelante y necesitamos las otras areas
router.get('/', (request, response) => {
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

  response.json(products);
})

router.get('/filter', (request, response) => {
  response.send('Soy un filter');
})

router.get('/:id', (request, response) => {
  const { id } = request.params;

  if (id === '999') {
    response.status(404).json({
      message: 'not found'
    })
  } else {
    response.status(200).json({
      id,
      name: "Mario Kart",
    })
  }
})

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: 'created',
    data: body
  });
})

//El patch siempre recibe un id
router.patch('/:id', (request, response) => {
  const body = request.body;
  const { id } = request.params;

  response.json({
    message: 'update',
    data: body,
    id,
  });
})

router.put('/:id', (request, response) => {
  const body = request.body;
  const { id } = request.params;

  response.json({
    message: 'update all',
    data: body,
    id,
  });
})

router.delete('/:id', (request, response) => {
  const { id } = request.params;

  response.json({
    message: 'Delete',
    id,
  });
})


module.exports = router;
