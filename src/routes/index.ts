import { Router } from 'express';

import usersRouter from './users.routes';
import ordersRouter from './orders.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/orders', ordersRouter);

export default routes;
