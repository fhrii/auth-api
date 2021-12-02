import dotenv from 'dotenv';

import container from './Infrastructures/container';
import createServer from './Infrastructures/http/createServer';

dotenv.config();

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server is starting at ${server.info.uri}`);
};

start();
