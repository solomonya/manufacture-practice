export class ProjectService {
  constructor(prismaClient, utils, crud) {
    this.prismaClient = prismaClient;
    this.utils = utils;
    this.crud = crud;
  }

  findMany({ query }) {
    return this.crud.findMany(query);
  }

  findById(id) {
    return this.crud.getById(parseInt(id));
  }

  create(data) {
    return this.crud.create(data);
  }

  update(id, data) {
    return this.crud.update(parseInt(id), data);
  }
}