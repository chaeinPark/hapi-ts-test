import Glue from "@hapi/glue"
import manifest from "@config/manifest.js";
import path from "path";
import { fileURLToPath } from "url";

const server = await Glue.compose(manifest, { relativeTo: path.dirname(fileURLToPath(import.meta.url)) });
export default server