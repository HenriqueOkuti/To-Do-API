import * as express from 'express';
import * as config from './config';
import { taskRouter } from './routers/index';

const server = express();
server.use(express.json()).use('/task', taskRouter);

server.listen(config.PORT, () => {
  console.clear();
  console.log(`Listening on: ${config.PORT}`);
});

export default server;
