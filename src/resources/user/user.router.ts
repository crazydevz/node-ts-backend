import { Router } from 'express';
import userController from './controller/user.controller';
import { signupSchema, signinSchema } from './user.schema';
import { validateBody } from '@middleware/functions/validate-schema';

const router = Router();

router.post('/signup', validateBody(signupSchema), userController.signup);
router.post('/signin', validateBody(signinSchema), userController.signin);

module.exports = router;
