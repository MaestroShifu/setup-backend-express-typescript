import express, { urlencoded, json, Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { HttpStatusCode } from '../../utils/status-code';
import userRoutes from '../../interface/routes/user-routes';

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(
  urlencoded({
    extended: false
  })
);
app.use(json());

app.get('/', (_req: Request, res: Response) => {
  res.status(HttpStatusCode.OK).send();
});
app.use(userRoutes);

export default app;
