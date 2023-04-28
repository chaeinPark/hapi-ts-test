import { Manifest, PluginObject } from "@hapi/glue";
import ping from "./ping/index.js";

const plugins:  Array<(string|PluginObject)> = [
  {
    plugin: ping
  }
];

export default plugins
