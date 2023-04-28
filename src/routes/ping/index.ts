import { Plugin, Request, ResponseObject, ResponseToolkit, Server } from "@hapi/hapi";

const ping: Plugin<null> = {
  name: 'ping',
  version: '1',
  register: (server: Server) => {
    server.route({
      method: 'GET',
      path: '/ping',
      options: {
        tags: ["ping"],
        notes: "ping",
        handler: (request: Request, h:ResponseToolkit): ResponseObject => {
          return h.response({
            ping: 'pong'
          })
        }
      }
    })
  }
};

export default ping
