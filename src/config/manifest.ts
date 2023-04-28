import { Manifest } from "@hapi/glue";
import routes from "@routes/index.js";

const manifest: Manifest = {
  server: {
      port: 9090
  },
  register: {
      plugins: [
        ...routes
      ]
  }
};

export default manifest