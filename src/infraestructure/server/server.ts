import { HttpStatusCode } from '../../constant/status-code';
import express, { urlencoded, json, Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

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

app.listen(3000, () => {
  console.log('Funciona!!');
});

export default app;
