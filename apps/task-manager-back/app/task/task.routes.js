export async function taskRoutes(fastify, options) {
  const { taskService } = options;

  fastify.get("/", async (request, reply) => {
    const { query } = request;
    const tasks = await taskService.findMany({ query });
    reply.status(200).send({ tasks });
  });
  
  fastify.get("/:id", async (request, reply) => {
    reply.status(200).send({ request: request.params });
  });
}