import { Request, Response } from 'express';
import { HttpStatusCode } from '../../utils/status-code';
import JwtBcryptAuth from '../adapters/jwt-bcrypt-auth';
import UserMongoDB from '../adapters/user-mongodb';
import createUser from '../../domain/interactors/user/create-user';
import loginAuth from '../../domain/interactors/auth/login-auth';

const useCaseCreateUser = createUser(new UserMongoDB(), new JwtBcryptAuth());
const useCaseLoginAuth = loginAuth(new JwtBcryptAuth());

const userRegister = async (req: Request, res: Response) => {
  try {
    const user = await useCaseCreateUser(req.body);
    const loginAutenticated = await useCaseLoginAuth(user);
    res.status(HttpStatusCode.OK).send(loginAutenticated);
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).send('Upss hay un error');
  }
};

export default { userRegister };
