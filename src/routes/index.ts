import { PluginObject } from "@hapi/glue";
import ping from "@routes/ping/index.js";

const plugins:  Array<(string|PluginObject)> = [
  {
    plugin: ping
  }
];

export default plugins
