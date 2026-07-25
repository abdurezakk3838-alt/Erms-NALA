import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { usersController } from './users.controller';
import { createUserSchema } from './users.schema';

const usersRouter = Router();

usersRouter.get('/', usersController.list);
usersRouter.post('/', validate(createUserSchema), usersController.create);

export default usersRouter;
