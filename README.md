# @carbonenginejs/runtime-sof

SOF builder: resolves a ship DNA + SOF data into a Trinity Graph, emitted as JSON or hydrated models. Standalone-service ready (artist/Blender pipeline). GPU-free.

Part of the CarbonEngineJS runtime/engine tier (Deno + TypeScript, WebGPU-first).
Ports/adapts from CarbonEngine (https://github.com/carbonengine, MIT); ccpwgl consulted as a reference donor.

## Status

Scaffold only — no implementation yet. Layout: src/ (source; index.ts barrel) and test/ (sibling).

## Provenance

CarbonEngine and Fenris Creations (CCP Games) are named for interoperability and provenance context.
This package's runtime code is CarbonEngineJS original work that ports or adapts CarbonEngine class
structure and behavior, verified against the CarbonEngine C++ source, and mines the ccpwgl WebGL port
as a reference donor. Not affiliated with or endorsed by CCP Games.
