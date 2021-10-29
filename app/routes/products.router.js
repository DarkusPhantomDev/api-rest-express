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

router.post('/', async (request, response) => {
  const body = request.body;
  const newProducts = await service.create(body);
  response.status(201).json(newProducts);
})

router.patch('/:id', async (request, response) => {
  try {
    const body = request.body;
    const { id } = request.params;
    const product = await service.update(id,body);
    response.json(product);
  } catch (error) {
    response.status(404).json({
      message: error.message
    });
  }
})

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const product = await service.delete(id);
  response.json(product);
})

module.exports = router;
