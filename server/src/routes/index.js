const dishRouter = require('./dish.route');
const leaderRouter = require('./leader.route');
const promotionRouter = require('./promotion.route');

const routes = (app) => {
  app.use('/api/dishes', dishRouter);
  app.use('/api/leaders', leaderRouter);
  app.use('/api/promotions', promotionRouter);
};

module.exports = routes;
