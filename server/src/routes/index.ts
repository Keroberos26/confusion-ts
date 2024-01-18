import { Express } from 'express';
import dishRoute from './dish';
import promoRoute from './promotion';
import leaderRoute from './leader';

function routes(app: Express) {
  app.use('/api/dishes', dishRoute);
  app.use('/api/promotions', promoRoute);
  app.use('/api/leaders', leaderRoute);
}

export default routes;
