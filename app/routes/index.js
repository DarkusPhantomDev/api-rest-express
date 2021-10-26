const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const homeRouter = require('./home.router');

function routerApi(app) {
  app.use('/home', homeRouter);
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
