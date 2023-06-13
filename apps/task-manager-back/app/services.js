import { taskModule } from "./task/index.js";
import { prismaPlugin } from "../lib/db/prismaPlugin.js";
import { utilsPlugin } from "../lib/utils/utilsPlugin.js";

const modules = Object.freeze([
  taskModule
]);

async function servicesPlugin(fastify, _, done) {
  await fastify.register(prismaPlugin);
  await fastify.register(utilsPlugin);
  const options = { prisma: fastify.prisma, utils: fastify.utils };
  modules.forEach(module => {
    fastify.register(module, options);
  });
  done();
}

export { servicesPlugin };