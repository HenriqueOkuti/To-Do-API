import * as express from 'express';
import * as config from './config';

const server = express();
server.use(express.json);

console.clear();
server.listen(config.PORT, () =>
  console.log(`Listening on PORT: ${config.PORT}`)
);
