import { Router } from 'express';
import HelloController from './controllers/HelloController';

const routes = Router();
routes
  .get('/', HelloController.index)
  .get('/hello', HelloController.index)
  .get('/hello/:id', HelloController.show)
  .post('/hello', HelloController.store)
  .put('/hello/:id', HelloController.update)
  .delete('/hello/:id', HelloController.destroy);

export default routes;
