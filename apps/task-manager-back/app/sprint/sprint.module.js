import { sprintRoutes } from "./sprint.routes.js";
import { SprintService } from "./sprint.service.js";

function sprintModule(fastify, options, done) {
  fastify.register(sprintRoutes, 
    { 
      prefix: "/sprint", 
      service: new SprintService(options.prisma, options.utils, options.crud) 
    }
  );
  done();
}

export { sprintModule };