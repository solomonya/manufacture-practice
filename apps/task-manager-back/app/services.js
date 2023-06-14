import { taskModule } from "./task/index.js";
import { prismaPlugin } from "../lib/db/prismaPlugin.js";
import { utilsPlugin } from "../lib/utils/utilsPlugin.js";
import { ModelCrud } from "./crud/ModelCrud.js";

const modules = Object.freeze([
  { module: taskModule, entityName: 'task' }
]);

async function servicesPlugin(fastify, _, done) {
  await fastify.register(prismaPlugin);
  await fastify.register(utilsPlugin);
  modules.forEach(({ module, entityName }) => {
    const options = { 
      prisma: fastify.prisma, 
      utils: fastify.utils,
      crud: new ModelCrud(fastify.prisma, entityName, fastify.utils)  
    };
    fastify.register(module, options);
  });
  done();
}

export { servicesPlugin };