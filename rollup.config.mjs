import { babel } from "@rollup/plugin-babel";
import fs from "node:fs";
import path from "node:path";

const external = id => id.startsWith("@carbonenginejs/") || id.startsWith("node:");
const generatedDir = path.resolve("src/generated");
const promotedClasses = new Set(["EveSOF.js", "EveSOFDNA.js", "EveSOFDataMgr.js"]);
const generatedInputs = fs.readdirSync(generatedDir)
  .filter(file => file.endsWith(".js") && !promotedClasses.has(file))
  .map(file => path.join("src/generated", file));

export default {
  input: [
    "src/index.js",
    "src/data/index.js",
    "src/sof/index.js",
    ...generatedInputs
  ],
  external,
  output: {
    dir: "npm/dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
    sourcemap: true
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      extensions: [".js"],
      babelrc: false,
      configFile: false,
      plugins: [
        ["@babel/plugin-proposal-decorators", { version: "2023-11" }]
      ]
    })
  ]
};
