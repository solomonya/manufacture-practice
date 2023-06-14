export async function taskRoutes(fastify, options) {
  const { service } = options;

  fastify.get("/", async (request, reply) => {
    const { query } = request;
    const tasks = await service.findMany({ query });
    reply.status(200).send({ tasks });
  });
  
  fastify.get("/:id", async (request, reply) => {
    const { params } = request;
    const task = await service.findById(params.id);
    reply.status(200).send(task);
  });

  fastify.post("/", async (request, reply) => {
    const { body } = request;
    const task = await service.create(body);
    reply.status(201).send(task);
  });

  fastify.patch("/:id", async (request, reply) => {
    const { params, body } = request;
    const task = await service.update(params.id, body);
    reply.status(200).send(task);
  });
}