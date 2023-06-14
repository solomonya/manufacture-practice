export async function taskRoutes(fastify, options) {
  const { taskService } = options;

  fastify.get("/", async (request, reply) => {
    const { query } = request;
    const tasks = await taskService.findMany({ query });
    reply.status(200).send({ tasks });
  });
  
  fastify.get("/:id", async (request, reply) => {
    const { params } = request;
    const task = await taskService.findById(params.id);
    reply.status(200).send(task);
  });

  fastify.post("/", async (request, reply) => {
    const { body } = request;
    const task = await taskService.create(body);
    reply.status(201).send(task);
  });

  fastify.patch("/:id", async (request, reply) => {
    const { params, body } = request;
    const task = await taskService.update(params.id, body);
    reply.status(200).send(task);
  });
}