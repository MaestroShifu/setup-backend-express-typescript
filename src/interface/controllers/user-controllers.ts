import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../utils/status-code';
import JwtBcryptAuth from '../adapters/jwt-bcrypt-auth';
import UserMongoDB from '../adapters/user-mongodb';
import ErrorsHandler from '../adapters/errors-handler';
import createUser from '../../domain/interactors/user/create-user';
import loginAuth from '../../domain/interactors/auth/login-auth';

const useCaseCreateUser = createUser(
  new UserMongoDB(),
  new JwtBcryptAuth(),
  new ErrorsHandler()
);
const useCaseLoginAuth = loginAuth(new JwtBcryptAuth());

const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await useCaseCreateUser(req.body);
    const loginAutenticated = await useCaseLoginAuth(user);
    res.status(HttpStatusCode.OK).send(loginAutenticated);
  } catch (error) {
    next(error);
  }
};

export default { userRegister };
