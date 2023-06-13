import { taskModule } from "./task/index.js";
import { prismaPlugin } from "../lib/db/prismaPlugin.js";

async function servicesPlugin(fastify, options, done) {
  await fastify.register(prismaPlugin);
  fastify.register(taskModule, { prisma: fastify.prisma });
  done();
}

export { servicesPlugin };