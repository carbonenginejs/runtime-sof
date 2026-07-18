# @carbonenginejs/runtime-sof

GPU-free Space Object Factory data model and Carbon-first ship DNA builder.

Part of the CarbonEngineJS runtime/engine tier (decorated JavaScript, WebGPU-first).
Ports/adapts from CarbonEngine (https://github.com/carbonengine, MIT). Carbon
C++/Blue is canonical; ccpwgl is only an optional, non-authoritative source of
JavaScript convenience ideas.

## Status

The package provides the SOF data surface, a map-backed
`EveSOFDataMgr`, Carbon DNA parsing and validation through `EveSOFDNA`, and a
first `EveSOF.BuildFromDNA` slice. The builder emits a versioned
`carbon.document` graph that hydrates through `runtime-trinity`. Current output
includes multi-hull bounds and locators, the space-object type and core flags,
`Tr2Mesh`, routed mesh areas, shader parameters/resources, pattern masks,
custom masks, transparent depth clones, decal sets, and CPU-side impact overlay
graphs with shield, armor, hull-particle, and flicker components. Authored hull
light sets emit visible point, textured-point, and spot lights with faction
colors and cumulative multi-hull transforms; their data is represented by
referenced `LightData` nodes for typed hydration. Visible hull sprite sets also
emit shared-effect `EveSpriteSet` attachments, including Carbon saturation and
SOF6 private sprite-light descriptors restored by the hydration adapter. Hull
spotlight sets emit their cone/glow effects, legacy faction colors, SOF6 HSV
color variants, multi-hull transforms, and private spotlight-light descriptors.
Plane sets emit standard, haze, and video effects; legacy/SOF6 colors; authored
blink state; and SOF6 lights restored through Trinity's maintained CPU API.
Sprite-line sets share the sprite pool effect and preserve Carbon line/circle
geometry plus per-sprite SOF6 light descriptors restored through Trinity's
maintained CPU API.
Haze sets emit spherical, skinned-spherical, and half-spherical effects with
Carbon transforms, faction colors, and SOF6 point-light descriptors installed
through Trinity's maintained `AddLightFromSOF`/`Initialize` CPU lifecycle.
Legacy and SOF6 banners emit usage-grouped `EveBannerSet` graphs, generic
banner effects, private light/texture state, and root external texture bindings.
Legacy hull children and SOF6 child sets now project and filter exactly from
the first hull, including faction overrides and standalone build flags. Because
their `.red` paths name arbitrary Trinity graphs, callers provide a synchronous
`EveSOF.SetChildResourceResolver()` that returns either a local root descriptor
or a complete `carbon.document` fragment. Fragment IDs and references are
remapped into the output document for every placement clone. Legacy hull
animations emit scalar/quaternion curves, model-rotation bindings, empty curve
sets, and recursive `Tr2DynamicEmitter.rate` bindings; Carbon's translation
animation branch remains its source TODO.
The standalone tail also projects first-hull sound emitters and controllers,
emits `TriObserverLocal` audio placement intent, filters controller resources,
and loads model rotation/translation curve documents after legacy animations.
`EveSOF.SetObjectResourceResolver()` provides the synchronous controller/curve
resource boundary; audio backend creation remains intentionally deferred.
First-hull instanced attachments now project Carbon's packed current/previous
transform rows, runtime instance bounds, shader inputs, and quality filters.
The builder emits `Tr2RuntimeInstanceData`, `Tr2InstancedMesh`, opaque area,
effect, child-mesh, and named container nodes in Carbon order. Runtime-instance
layout, normalized rows, and explicit bounds are ordinary graph fields;
Trinity may derive a packed CPU byte view from them, while GPU buffer creation
and upload remain exclusively renderer responsibilities. Base-mesh paths,
child instance transforms, child placement (SRT, LOD gate, origin), placement
containers (animation owner, always-on, placement root), decal static index
buffers, plane/banner shared texture parameters, impact overlay state, and
the faction inherit color set are all ordinary declared node fields now.
Multi-hull boosters now project detached hull/race records, emit Carbon's
near/far volumetric effects, glow sprites, optional trails, cumulative hull
transforms, and merged booster locators. Booster descriptions are emitted as
typed `EveBoosterSet2Item` graph nodes; Trinity rebuilds derived glow, trail,
light, and bounds state during initialization. Layout catalog records
project recursively into Carbon's deterministic planner shape, including
groups, depletion counters, placement distributions, all four condition
methods, descriptor defaults, and DNA layout/locator accessors.
`EveSOF.PlanLayoutFromDNA()` exposes the detached, versioned CPU plan with
Carbon's exact RNG stream, locator occupation/ranking, condition quirks,
random rotation/scaling, descriptor inheritance, and recursive nested layout
transforms. `BuildFromDNA()` now consumes the same plan to emit Carbon's
`layouts` container, ordinary extension hull children, non-shared runtime
instance meshes, and the single root-level `SharedInstancedMeshes` child.
Shared mesh records are typed `EveChildInstancedMesh` nodes on the declared
`EveChildInstancedMeshes.meshes` field. Scrambled layouts accept
an explicit `scrambleSeedOffset` option so offline builds remain reproducible
without wall-clock or global random state. Layout occurrences independently
expand the root bounding sphere and shield ellipsoid according to their authored
flags. Placement containers route controllers and audio per occurrence, along
with legacy/SOF6 effect children and retained animation-owner setup. Carbon's
two-owner rule is preserved: transform children, legacy curve sets, and model
rotation state remain on the parent space object, while effect children alone
are distributed across placement containers.
Carbon extension-class builds now use their separate fake-placement path: an
empty `EveMobile` root mesh owns an always-on `Extension Container`, while the
actual extension geometry, decals, attachments, placement controllers/audio,
instanced attachments, locator sets, and nested layouts are emitted beneath or
alongside that placement graph. Root initialization and placement-root intent
are retained for device-free hydration. The complete 44-entry faction inherit
color set is emitted as an `EveChildInheritProperties` node on the root's
declared `inheritProperties` field in Carbon's enum order;
`EveSpaceObject2.Initialize` propagates it, so authoring
(`SetInheritProperties`) and field-populated graphs converge. The source
scanner expands all 44 indexed Blue color fields rather than the unexpanded
macro placeholder.
Swarm build classes emit Carbon's complete 25-value `EveSwarm` behavior and
hydrate it before initialization. Variant DNAs construct fresh stripped custom
hulls, and locator-set fan-out/merging and instanced-layout decal routing follow
their dedicated Carbon build paths.
The public turret material entry points support both direct faction selection
and full parent DNA, including Carbon's faction material-slot remap and
const-parameter-first update behavior.

Plain model values are the recommended SOF boundary:
`BuildValues`/`BuildValuesAsync`/`BuildValuesFromDNA`/`BuildValuesFromDNAAsync`
hydrate the built graph and return the root's
`GetValues({ refs: true, typeTags: true })` — one nested JSON-serializable
value with `_type` on polymorphic nodes and `_id`/`_ref` only for genuinely
shared identity, no node table or `raw` payloads. Callers supply the class
registry (`options.registry`, e.g.
`CjsClassRegistry.fromMaps({ constructors: runtimeTrinityModule })`), keeping
runtime-sof free of a runtime-trinity dependency. Hydrate the result with
`RootClass.from(values)` against the same registry; parity tests prove the
values-hydrated and document-hydrated graphs export identically, including a
shared-reference graph and a graph carrying the remaining deferred audio
record.

The explicit `carbon.document` output (`BuildFromDNA`) remains available as
the compatibility/diagnostic graph format. Consumers that hydrate documents
pass `createSofHydrationAdapter()`, which now carries only the per-kind
Initialize lifecycle (what `CjsModel.from` performs on the values path) and
one deliberately retained private record: `sofAudioEmitterSetup`, the
deferred audio-emitter construction intent, which stays document-only until
the pure-data audio graph package exists. Observer placement itself is
ordinary declared data and appears in values output. The emitted animation
document preserves the complete curve and binding graph.
Texture path inserts remain
deterministic and GPU-free through an optional synchronous resource-existence
resolver. Remaining specialized stages are still in progress.

Decorated JavaScript under `src` is canonical source. `npm run build:npm`
produces consumer ESM under `npm/dist`.

### Source promotion

The behavior-promotion queue is complete. `src/generated` is retained only as
an empty compatibility namespace; all reviewed decorated implementations live
under the matching `src/sof/<domain>` folder and are exported through the
domain barrels and root package surface. Carbon/Blue is authoritative for
fields, defaults, enum ownership, and runtime behavior. Secondary JavaScript
implementations may inform optional CPU conveniences only after they are
checked against Carbon.

## Async boundary

The synchronous resolver methods remain available for preloaded and offline
tools. Promise-facing callers configure a narrow resource adapter and use the
explicit async methods:

```js
sof.Register({
  dataPath: "res:/sof/data.black",
  resources: {
    getObject: (path, request) => library.FetchObject(path, request),
    exists: (path, request) => source.Exists(path, request)
  }
});

await sof.LoadDataAsync();
const document = await sof.BuildFromDNAAsync("rifter:minmatar:minmatar");
```

Async builds run the deterministic builder once to collect selected
dependencies, resolve each unique dependency, then run the same builder against
per-call synchronous caches. Completion means the `carbon.document` contains
its selected SOF child/controller/curve fragments. It does not imply geometry,
texture, effect, engine-adapter, or GPU readiness.

Registration is additive: omitted resource callbacks retain their current
values, while an explicit `null` clears only that callback. Resource paths are
normalized before requests are deduplicated by path and semantic output.
Resolver failures reject the complete operation with code
`EVE_SOF_RESOURCE_RESOLUTION_FAILED` plus `path`, `role`, and `cause`; no
partial document is returned. A resolved `null` remains an optional missing
dependency and follows the synchronous omission behavior.

## Checks

```sh
npm test
npm run lint
```

## Provenance

CarbonEngine and Fenris Creations (CCP Games) are named for interoperability and provenance context.
This package's runtime code is CarbonEngineJS original work that ports or adapts CarbonEngine class
structure and behavior against the authoritative Carbon C++/Blue source. The ccpwgl WebGL port may
inform optional JavaScript conveniences only; it is not an authority for schema or runtime behavior.
Not affiliated with or endorsed by CCP Games.
