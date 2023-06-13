import fp from "fastify-plugin";

const utilsPlugin = fp((server, options, done) => {
  const utils = Object.freeze({
    parseFilters: (query) => Object.fromEntries(Object.entries(query).filter(([_, value]) => value.length > 0)) 
  });
  server.decorate('utils', utils);
  done();
});

export { utilsPlugin };