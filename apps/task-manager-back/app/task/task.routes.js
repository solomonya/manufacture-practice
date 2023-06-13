export async function taskRoutes(fastify, options) {
  const { taskService } = options;

  fastify.get("/", async (request, reply) => {
    const tasks = await taskService.findMany();
    reply.status(200).send({ tasks, query: request.query });
  });
}