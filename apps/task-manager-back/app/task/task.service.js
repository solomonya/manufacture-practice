export class TaskService {
  constructor(prismaClient, utils) {
    this.prismaClient = prismaClient;
    this.utils = utils;
  }

  findMany({ query }) {
    const filters = this.utils.parseFilters(query);
    return this.prismaClient.task.findMany({
      where: filters,
      include: {
        assignee: {
          select: {
            email: true,
            username: true
          }
        },
        reporter: {
          select: {
            email: true,
            username: true
          }
        }
      }
    });
  }
}