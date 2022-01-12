import { Request, Response } from 'express';
import { HttpStatusCode } from '../../utils/status-code';

const userRegister = async (_req: Request, res: Response) => {
  try {
    res.status(HttpStatusCode.OK).send(true);
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).send('Upss hay un error');
  }
};

export default { userRegister };
