import { Lifecycle, ResponseObject, ResponseToolkit } from "@hapi/hapi";

export default {
  ping: (request: Request, h:ResponseToolkit): ResponseObject => {
      return h.response({
          ping: 'pong'
      })
  }
}