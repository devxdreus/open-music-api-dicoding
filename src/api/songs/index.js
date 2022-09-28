const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'songs',
    version: '1.0.0',
    register: async (server, { service }) => {
        server.route(routes(new SongsHandler(service)));
    },
};
