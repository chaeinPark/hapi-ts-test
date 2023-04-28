const ping = {
    name: 'ping',
    version: '1',
    register: (server) => {
        server.route({
            method: 'GET',
            path: '/ping',
            options: {
                tags: ["ping"],
                notes: "ping",
                handler: (request, h) => {
                    return h.response({
                        ping: 'pong'
                    });
                }
            }
        });
    }
};
export default ping;
