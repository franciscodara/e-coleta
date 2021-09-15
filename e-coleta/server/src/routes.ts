import express from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointController = new PointsController();
const itemsController = new ItemsController();

// List all registered items
routes.get('/items', itemsController.index);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;