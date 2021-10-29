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
  const newProducts = service.create(body);
  response.status(201).json(newProducts);
})

router.patch('/:id', (request, response) => {
  const body = request.body;
  const { id } = request.params;
  const product = service.update(id,body);
  response.json(product);
})

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const product = service.delete(id);
  response.json(product);
})


module.exports = router;
