const express = require('express');
const ProductsService = require('./../services/product.service') ;

const router = express.Router();
const service = new ProductsService();

router.get('/', (request, response) => {
  const products = service.find();
  response.json(products);
})

router.get('/filter', (request, response) => {
  response.send('Soy un filter');
})

router.get('/:id', (request, response) => {
  const { id } = request.params;
  const product = service.findOne(id);

  response.json(product);
})

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: 'created',
    data: body
  });
})

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
