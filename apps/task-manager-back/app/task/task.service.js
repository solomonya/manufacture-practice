export class TaskService {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  findMany() {
    return this.prismaClient.task.findMany({
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