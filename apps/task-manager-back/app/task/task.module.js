import { TaskService } from "./task.service.js";
import { taskRoutes } from "./task.routes.js";

function taskModule(fastify, options, done) {
  fastify.register(taskRoutes, 
    { 
      prefix: "/task", 
      service: new TaskService(options.prisma, options.utils, options.crud) 
    }
  );
  done();
}

export { taskModule };