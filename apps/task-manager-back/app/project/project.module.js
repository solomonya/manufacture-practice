import { projectRoutes } from "./project.routes.js";
import { ProjectService } from "./project.service.js";

function projectModule(fastify, options, done) {
  fastify.register(projectRoutes, 
    { 
      prefix: "/project", 
      service: new ProjectService(options.prisma, options.utils, options.crud) 
    }
  );
  done();
}

export { projectModule };