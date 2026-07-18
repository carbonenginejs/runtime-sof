/**
 * Creates the hydration adapter required by runtime-SOF's private graph state.
 *
 * Carbon keeps decal indices and impact locator/setup state outside their
 * serialized public fields. SOF records that state in carbon.document raw
 * data; this adapter restores it through the
 * owning CPU methods after references and public fields are hydrated.
 */
function createSofHydrationAdapter() {
  const decalIndices = new WeakMap();
  const impactSetups = new WeakMap();
  const planeSetups = new WeakMap();
  const bannerSetups = new WeakMap();
  const childSetups = new WeakMap();
  const placementContainerSetups = new WeakMap();
  const spaceObjectSetups = new WeakMap();
  const audioEmitterSetups = new WeakMap();
  const instancedMeshSetups = new WeakMap();
  const instancedChildSetups = new WeakMap();
  return {
    applyValues(instance, values, context) {
      const next = {
        ...values
      };
      if (Object.hasOwn(next, "sofChildSetup")) {
        childSetups.set(instance, next.sofChildSetup ?? null);
        delete next.sofChildSetup;
      }
      if (Object.hasOwn(next, "sofPlacementContainerSetup")) {
        placementContainerSetups.set(instance, next.sofPlacementContainerSetup ?? null);
        delete next.sofPlacementContainerSetup;
      }
      if (Object.hasOwn(next, "sofSpaceObjectSetup")) {
        spaceObjectSetups.set(instance, next.sofSpaceObjectSetup ?? null);
        delete next.sofSpaceObjectSetup;
      }
      if (Object.hasOwn(next, "sofAudioEmitterSetup")) {
        audioEmitterSetups.set(instance, next.sofAudioEmitterSetup ?? null);
        delete next.sofAudioEmitterSetup;
      }
      if (Object.hasOwn(next, "sofInstancedMeshSetup")) {
        instancedMeshSetups.set(instance, next.sofInstancedMeshSetup ?? null);
        delete next.sofInstancedMeshSetup;
      }
      if (Object.hasOwn(next, "sofInstancedChildSetup")) {
        instancedChildSetups.set(instance, next.sofInstancedChildSetup ?? null);
        delete next.sofInstancedChildSetup;
      }
      if (context?.kind === "EveSpaceObjectDecal") {
        decalIndices.set(instance, next.sofStaticIndexBuffers ?? []);
        delete next.sofStaticIndexBuffers;
      }
      if (context?.kind === "EveImpactOverlay") {
        impactSetups.set(instance, next.sofImpactSetup ?? null);
        delete next.sofImpactSetup;
      }
      if (context?.kind === "EvePlaneSet") {
        planeSetups.set(instance, next.sofPlaneSetup ?? null);
        delete next.sofPlaneSetup;
      }
      if (context?.kind === "EveBannerSet") {
        bannerSetups.set(instance, next.sofBannerSetup ?? null);
        delete next.sofBannerSetup;
      }
      if (instance && typeof instance.SetValues === "function") {
        instance.SetValues(next, context?.options);
      } else {
        Object.assign(instance, next);
      }
      return instance;
    },
    finalize(instance, context) {
      const childSetup = childSetups.get(instance);
      if (childSetup) {
        if (childSetup.target === "children") {
          if (typeof instance.SetRotation === "function") instance.SetRotation(childSetup.rotation);else instance.rotation = Array.from(childSetup.rotation);
          if (typeof instance.SetScaling === "function") instance.SetScaling(childSetup.scaling);else instance.scaling = Array.from(childSetup.scaling);
          if (typeof instance.SetTranslation === "function") instance.SetTranslation(childSetup.translation);else instance.translation = Array.from(childSetup.translation);
        } else {
          if (typeof instance.Setup === "function") {
            instance.Setup(childSetup.scaling, childSetup.rotation, childSetup.translation, childSetup.lowestLodVisible);
          } else {
            instance.scaling = Array.from(childSetup.scaling);
            instance.rotation = Array.from(childSetup.rotation);
            instance.translation = Array.from(childSetup.translation);
            instance.lowestLodVisible = childSetup.lowestLodVisible;
          }
          if (typeof instance.SetOrigin === "function") instance.SetOrigin(childSetup.origin);else instance.origin = childSetup.origin;
        }
      }
      if (context?.kind === "EveSpaceObjectDecal") {
        instance.SetIndices(decalIndices.get(instance) ?? []);
        instance.Initialize();
      } else if (context?.kind === "EveImpactOverlay") {
        const setup = impactSetups.get(instance);
        if (!setup) return;
        instance.Set(setup.hullDamageFlickerCurve, setup.armorImpactEmitter, setup.hullImpactEmitter, setup.armorDamageShader, setup.shieldImpactMesh, setup.shieldIsEllipsoid);
        instance.SetDamageLocatorCount(setup.damageLocatorCount);
        instance.Initialize();
      } else if (context?.kind === "EveSpriteSet") {
        instance.Initialize();
      } else if (context?.kind === "EveSpotlightSet") {
        if (typeof instance.Initialize === "function") instance.Initialize();else if (typeof instance.Rebuild === "function") instance.Rebuild();
      } else if (context?.kind === "EvePlaneSet") {
        const setup = planeSetups.get(instance);
        if (setup) {
          instance.SetImageMapParameter(setup.imageMap);
          instance.SetLayerMap1Parameter(setup.layerMap1);
          instance.SetLayerMap2Parameter(setup.layerMap2);
          instance.SetMaskMapParameter(setup.maskMap);
        }
        instance.Initialize();
      } else if (context?.kind === "EveSpriteLineSet") {
        if (typeof instance.Initialize === "function") instance.Initialize();else if (typeof instance.Rebuild === "function") instance.Rebuild();
      } else if (context?.kind === "EveHazeSet") {
        instance.Initialize();
      } else if (context?.kind === "EveBannerSet") {
        const setup = bannerSetups.get(instance);
        if (setup) {
          instance.SetPrimaryTextureParameter(setup.primaryTextureParameter ?? null);
        }
        instance.Initialize();
      } else if (context?.kind === "Tr2RuntimeInstanceData") {
        instance.Initialize?.();
      } else if (context?.kind === "Tr2InstancedMesh") {
        const setup = instancedMeshSetups.get(instance);
        if (setup) {
          if (typeof instance.SetMeshResPath === "function") instance.SetMeshResPath(setup.geometryResPath ?? "");
          if ((!Array.isArray(instance.opaqueAreas) || instance.opaqueAreas.length === 0) && Array.isArray(setup.opaqueAreas)) {
            instance.opaqueAreas = setup.opaqueAreas.slice();
          }
        }
      } else if (context?.kind === "EveChildMesh") {
        const setup = instancedChildSetups.get(instance);
        if (setup && typeof instance.SetInstanceTransforms === "function") {
          instance.SetInstanceTransforms(setup.instanceTransforms ?? []);
        }
      } else if (context?.kind === "EveBoosterSet2") {
        instance.Initialize?.();
      } else if (context?.kind === "EveChildContainer") {
        const setup = placementContainerSetups.get(instance);
        if (setup) {
          if (setup.animationOwner && typeof instance.SetAnimationOwner === "function") {
            instance.SetAnimationOwner(setup.animationOwner);
          }
          if (setup.alwaysOn !== undefined && typeof instance.SetAlwaysOn === "function") {
            instance.SetAlwaysOn(setup.alwaysOn);
          }
          if (setup.origin !== undefined && typeof instance.SetOrigin === "function") {
            instance.SetOrigin(setup.origin);
          }
          if (setup.isPlacementRoot !== undefined && typeof instance.SetIsPlacementRoot === "function") {
            instance.SetIsPlacementRoot(setup.isPlacementRoot);
          }
        }
      } else if (spaceObjectSetups.has(instance)) {
        const setup = spaceObjectSetups.get(instance);
        if (setup?.swarmBehavior && typeof setup.swarmBehavior === "object") {
          Object.assign(instance, setup.swarmBehavior);
        }
        if (Array.isArray(setup?.inheritColorSet) && typeof instance.SetInheritProperties === "function") {
          instance.SetInheritProperties(setup.inheritColorSet);
        }
        if (setup?.initialize && typeof instance.Initialize === "function") {
          instance.Initialize();
        }
      }
    },
    getChildSetup(instance) {
      return childSetups.get(instance) ?? null;
    },
    getPlacementContainerSetup(instance) {
      return placementContainerSetups.get(instance) ?? null;
    },
    getSpaceObjectSetup(instance) {
      return spaceObjectSetups.get(instance) ?? null;
    },
    getAudioEmitterSetup(instance) {
      return audioEmitterSetups.get(instance) ?? null;
    },
    getInstancedMeshSetup(instance) {
      return instancedMeshSetups.get(instance) ?? null;
    },
    getInstancedChildSetup(instance) {
      return instancedChildSetups.get(instance) ?? null;
    }
  };
}

export { createSofHydrationAdapter };
//# sourceMappingURL=createSofHydrationAdapter.js.map
