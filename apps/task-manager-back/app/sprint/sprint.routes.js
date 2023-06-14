export async function sprintRoutes(fastify, options) {
  const { service } = options;

  fastify.get("/", async (request, reply) => {
    const { query } = request;
    const sprints = await service.findMany({ query });
    reply.status(200).send({ sprints });
  });
  
  fastify.get("/:id", async (request, reply) => {
    const { params } = request;
    const sprint = await service.findById(params.id);
    reply.status(200).send(sprint);
  });

  fastify.post("/", async (request, reply) => {
    const { body } = request;
    const sprint = await service.create(body);
    reply.status(201).send(sprint);
  });

  fastify.patch("/:id", async (request, reply) => {
    const { params, body } = request;
    const sprint = await service.update(params.id, body);
    reply.status(200).send(sprint);
  });
}