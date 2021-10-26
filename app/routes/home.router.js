const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(`<h1>Usted esta en el Home. Bienvenido, usuario</h1>`);
})

module.exports = router;
