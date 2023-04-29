import { Plugin, Request, ResponseObject, ResponseToolkit, Server } from "@hapi/hapi";
import Ping from "@controllers/ping/index.js"

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
        handler: Ping.ping
      }
    })
  }
};

export default ping
