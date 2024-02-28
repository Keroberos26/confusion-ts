const dishRouter = require('./dish');

const routes = (app) => {
  app.use('/api/dishes', dishRouter);
};

module.exports = routes;
