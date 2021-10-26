const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const homeRouter = require('./home.router');

function routerApi(app) {
  const router = express.Router();

  //Aca le esta indicando la ruta con la que va a iniciar + el metodo que se va aplicar
  app.use('/api/v1', router);

  app.use('/home', homeRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
