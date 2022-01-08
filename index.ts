import app from './src/infraestructure/server/server';
import logger from './src/infraestructure/logger/logger';
import env from './src/infraestructure/config/config';

const log = logger('Index');

app.listen(env.PORT, () => {
  log('Successful start server %d', env.PORT);
});
