const ROOT_KINDS = Object.freeze(["EveShip2", "EveMobile", "EveStation2", "EveSwarm"]);
const INITIALIZE_KINDS = Object.freeze([...ROOT_KINDS, "EveSpaceObjectDecal", "EveImpactOverlay", "EveSpriteSet", "EveSpotlightSet", "EvePlaneSet", "EveSpriteLineSet", "EveHazeSet", "EveBannerSet", "Tr2RuntimeInstanceData", "EveBoosterSet2", "EveChildMesh", "EveChildContainer"]);

/**
 * Creates the hydration adapter for the explicit carbon.document path.
 *
 * All SOF-authored state now travels as declared node fields; the adapter's
 * remaining jobs are the per-kind Initialize lifecycle that `CjsModel.from`
 * performs on the values path, and retention of the deferred audio-emitter
 * construction intent (`sofAudioEmitterSetup`), which stays private until the
 * pure-data audio graph package exists.
 */
function createSofHydrationAdapter() {
  const audioEmitterSetups = new WeakMap();
  return {
    applyValues(instance, values, context) {
      const next = {
        ...values
      };
      if (Object.hasOwn(next, "sofAudioEmitterSetup")) {
        audioEmitterSetups.set(instance, next.sofAudioEmitterSetup ?? null);
        delete next.sofAudioEmitterSetup;
      }
      if (instance && typeof instance.SetValues === "function") {
        instance.SetValues(next, context?.options);
      } else {
        Object.assign(instance, next);
      }
      return instance;
    },
    finalize(instance, context) {
      if (INITIALIZE_KINDS.includes(context?.kind)) {
        if (typeof instance.Initialize === "function") instance.Initialize();else if (typeof instance.Rebuild === "function") instance.Rebuild();
      }
    },
    getAudioEmitterSetup(instance) {
      return audioEmitterSetups.get(instance) ?? null;
    }
  };
}

export { createSofHydrationAdapter };
//# sourceMappingURL=createSofHydrationAdapter.js.map
