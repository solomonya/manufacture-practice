export class ModelCrud {
  constructor(prisma, entity, utils) {
    this.entity = prisma[entity];
    this.utils = utils;
  }

  async create(data) {
    return this.entity.create({ data });
  }

  async getById(id) {
    return this.entity.findUnique({ where: { id } });
  }

  async update(id, data) {
    return this.entity.update({ where: { id }, data });
  }

  async delete(id) {
    return this.entity.delete({ where: { id } });
  }

  async findMany(query = {}, meta = null) {
    const { search_field, search_string, page = 1, page_size = 10, ...filterOptions } = query;
    const pageSize = Number.isNaN(parseInt(page_size)) ? 10 : parseInt(page_size);
    const parsedPage = Number.isNaN(parseInt(page)) ? 1 : parseInt(page);
    
    const skip = (parsedPage - 1) * pageSize;

    const filter = {
      where: this.utils.parseFilters(filterOptions),
      skip,
      take: pageSize,
    };

    if (meta !== null) {
      Object.keys(meta).forEach((key) => {
        filter[key] = meta[key];
      });
    }

    if (search_field && search_string) {
      filter.where[search_field] = { contains: search_string };
    }

    return this.entity.findMany(filter);
  }

  async count(filterOptions = {}, searchField = '', searchString = '') {
    const countFilter = {
      where: filterOptions,
    };

    if (searchField && searchString) {
      countFilter.where[searchField] = { contains: searchString };
    }

    return this.entity.count(countFilter);
  }
}