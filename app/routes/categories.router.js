const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (request, response) => {
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

router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: "games",
  })
})

router.get('/:categoriesId/products/:productsId', (request, response) => {
  const { categoriasId, productsId } = request.params;
  response.json({
    categoriasId,
    productsId
  })
})

module.exports = router;
