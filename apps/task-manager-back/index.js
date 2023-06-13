import Fastify from 'fastify';
import { Configs } from './config.js';

const fastify = Fastify({
  logger: true,
});

fastify.get("/api/v1/", async (request, reply) => {
  try {
    reply.send({ task_manager: "api" });
  } catch (e) {
    reply.send(e);
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: Configs.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();