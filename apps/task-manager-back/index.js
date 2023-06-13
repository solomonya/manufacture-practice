import Fastify from 'fastify';
import { Configs } from './config.js';
import { servicesPlugin } from './app/services.js';

const app = Fastify({
  logger: true,
});
app.register(servicesPlugin, { prefix: "/api/v1" });

const start = async () => {
  try {
    await app.listen({ port: Configs.PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();