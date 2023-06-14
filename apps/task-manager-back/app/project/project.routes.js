export async function projectRoutes(fastify, options) {
  const { service } = options;

  fastify.get("/", async (request, reply) => {
    const { query } = request;
    const projects = await service.findMany({ query });
    reply.status(200).send({ projects });
  });
  
  fastify.get("/:id", async (request, reply) => {
    const { params } = request;
    const project = await service.findById(params.id);
    reply.status(200).send(project);
  });

  fastify.post("/", async (request, reply) => {
    const { body } = request;
    const project = await service.create(body);
    reply.status(201).send(project);
  });

  fastify.patch("/:id", async (request, reply) => {
    const { params, body } = request;
    const project = await service.update(params.id, body);
    reply.status(200).send(project);
  });
}