// Build an npm-consumable package (ESM .js + .d.ts) from the Deno TS source.
//
// We author runtime-sof in Deno (build-free decorators + TS), but publish a
// compiled package so Node, bundlers, and Deno (via npm:) can all consume it.
// Run: deno run -A scripts/build_npm.ts
import { build, emptyDir } from "jsr:@deno/dnt@^0.42.1";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  // No Deno.* runtime APIs are used in src/ — no shims needed.
  shims: {},
  // Tests use Deno.test and stay Deno-only; don't run them in the Node build.
  test: false,
  // Deno's `deno check` task is the type-check authority for the source; dnt only
  // emits here. Skipping npm install + type-check keeps the build runnable before
  // the @carbonenginejs/core-types dependency is published to npm.
  typeCheck: false,
  skipNpmInstall: true,
  // ESM only — consumers are Node ESM / bundlers / Deno.
  scriptModule: false,
  declaration: "separate",
  // core-types is a real published npm dependency, not bundled. Map the bare
  // specifier the source imports to the npm package so dnt rewrites nothing and
  // records the dependency.
  // Key on the resolved local path (import map points the bare specifier here);
  // dnt rewrites it back to the published npm subpath and records the dep.
  mappings: {
    "../core-types/src/schema/index.js": {
      name: "@carbonenginejs/core-types",
      version: "^0.4.1",
      subPath: "schema",
    },
  },
  importMap: "./deno.json",
  compilerOptions: {
    target: "ES2022",
    lib: ["ES2022"],
  },
  package: {
    name: "@carbonenginejs/runtime-sof",
    version: "0.1.0",
    description:
      "CarbonEngineJS Space Object Factory (SOF) data classes and JSON contract.",
    license: "MIT",
    type: "module",
    sideEffects: false,
    engines: { node: ">=18" },
    dependencies: {
      "@carbonenginejs/core-types": "^0.4.1",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/carbonenginejs/runtime-sof.git",
    },
    publishConfig: { access: "public" },
  },
  async postBuild() {
    // README/NOTICE ship with the package if present.
    try {
      await Deno.copyFile("README.md", "npm/README.md");
    } catch { /* optional */ }
    try {
      await Deno.copyFile("NOTICE", "npm/NOTICE");
    } catch { /* optional */ }
  },
});

console.log("dnt build complete -> ./npm");
