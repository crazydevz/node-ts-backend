import { Router } from 'express';
import userController from './controller/user.controller';
import { signupSchema } from '@apiSchema/user';
import { validateBody } from '@middleware/functions/validateSchema';

const router = Router();

router.post('/user-signup', validateBody(signupSchema), userController.signup);

module.exports = router;
