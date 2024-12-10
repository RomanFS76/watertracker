import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

startServer();

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
