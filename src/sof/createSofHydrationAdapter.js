/**
 * Creates the hydration adapter required by runtime-SOF's private graph state.
 *
 * Carbon keeps decal indices, attachment light/blink records, GPU emitter descriptor
 * snapshots, and impact locator/setup state outside their serialized public fields. SOF records that
 * state in carbon.document raw data; this adapter restores it through the
 * owning CPU methods after references and public fields are hydrated.
 */
export function createSofHydrationAdapter()
{
  const decalIndices = new WeakMap();
  const emitterSetups = new WeakMap();
  const impactSetups = new WeakMap();
  const spriteLights = new WeakMap();
  const spotlightLights = new WeakMap();
  const planeSetups = new WeakMap();
  const planeBlinkData = new WeakMap();
  const spriteLineLights = new WeakMap();
  const hazeLights = new WeakMap();
  const bannerSetups = new WeakMap();
  const bannerReferences = new WeakMap();
  const childSetups = new WeakMap();
  const placementContainerSetups = new WeakMap();
  const spaceObjectSetups = new WeakMap();
  const emitterRateTargetIds = new WeakMap();
  const audioEmitterSetups = new WeakMap();
  const runtimeInstanceSetups = new WeakMap();
  const instancedMeshSetups = new WeakMap();
  const instancedChildSetups = new WeakMap();
  const sharedInstancedMeshesSetups = new WeakMap();
  const boosterSetups = new WeakMap();
  return {
    applyValues(instance, values, context)
    {
      const next = { ...values };
      if (Object.hasOwn(next, "sofChildSetup"))
      {
        childSetups.set(instance, next.sofChildSetup ?? null);
        delete next.sofChildSetup;
      }
      if (Object.hasOwn(next, "sofPlacementContainerSetup"))
      {
        placementContainerSetups.set(instance, next.sofPlacementContainerSetup ?? null);
        delete next.sofPlacementContainerSetup;
      }
      if (Object.hasOwn(next, "sofSpaceObjectSetup"))
      {
        spaceObjectSetups.set(instance, next.sofSpaceObjectSetup ?? null);
        delete next.sofSpaceObjectSetup;
      }
      if (Object.hasOwn(next, "sofEmitterRateTargetId"))
      {
        emitterRateTargetIds.set(instance, Number(next.sofEmitterRateTargetId ?? -1));
        delete next.sofEmitterRateTargetId;
      }
      if (Object.hasOwn(next, "sofAudioEmitterSetup"))
      {
        audioEmitterSetups.set(instance, next.sofAudioEmitterSetup ?? null);
        delete next.sofAudioEmitterSetup;
      }
      if (Object.hasOwn(next, "sofRuntimeInstanceData"))
      {
        runtimeInstanceSetups.set(instance, next.sofRuntimeInstanceData ?? null);
        delete next.sofRuntimeInstanceData;
      }
      if (Object.hasOwn(next, "sofInstancedMeshSetup"))
      {
        instancedMeshSetups.set(instance, next.sofInstancedMeshSetup ?? null);
        delete next.sofInstancedMeshSetup;
      }
      if (Object.hasOwn(next, "sofInstancedChildSetup"))
      {
        instancedChildSetups.set(instance, next.sofInstancedChildSetup ?? null);
        delete next.sofInstancedChildSetup;
      }
      if (Object.hasOwn(next, "sofSharedInstancedMeshesSetup"))
      {
        sharedInstancedMeshesSetups.set(instance, next.sofSharedInstancedMeshesSetup ?? null);
        delete next.sofSharedInstancedMeshesSetup;
      }
      if (Object.hasOwn(next, "sofBoosterSetup"))
      {
        boosterSetups.set(instance, next.sofBoosterSetup ?? null);
        delete next.sofBoosterSetup;
      }
      if (context?.kind === "EveSpaceObjectDecal")
      {
        decalIndices.set(instance, next.sofStaticIndexBuffers ?? []);
        delete next.sofStaticIndexBuffers;
      }
      if (context?.kind === "Tr2GpuUniqueEmitter")
      {
        emitterSetups.set(instance, next.sofEmitterSetup ?? null);
        delete next.sofEmitterSetup;
      }
      if (context?.kind === "EveImpactOverlay")
      {
        impactSetups.set(instance, next.sofImpactSetup ?? null);
        delete next.sofImpactSetup;
      }
      if (context?.kind === "EveSpriteSet")
      {
        spriteLights.set(instance, next.sofSpriteLights ?? []);
        delete next.sofSpriteLights;
      }
      if (context?.kind === "EveSpotlightSet")
      {
        spotlightLights.set(instance, next.sofSpotlightLights ?? []);
        delete next.sofSpotlightLights;
      }
      if (context?.kind === "EvePlaneSet")
      {
        planeSetups.set(instance, next.sofPlaneSetup ?? null);
        delete next.sofPlaneSetup;
      }
      if (context?.kind === "EvePlaneSetItem")
      {
        planeBlinkData.set(instance, next.sofBlinkData ?? [1, 0, 1, 0]);
        delete next.sofBlinkData;
      }
      if (context?.kind === "EveSpriteLineSet")
      {
        spriteLineLights.set(instance, next.sofSpriteLineLights ?? []);
        delete next.sofSpriteLineLights;
      }
      if (context?.kind === "EveHazeSet")
      {
        hazeLights.set(instance, next.sofHazeLights ?? []);
        delete next.sofHazeLights;
      }
      if (context?.kind === "EveBannerSet")
      {
        bannerSetups.set(instance, next.sofBannerSetup ?? null);
        delete next.sofBannerSetup;
      }
      if (context?.kind === "EveBannerItem")
      {
        bannerReferences.set(instance, Number(next.sofReference ?? 0) | 0);
        delete next.sofReference;
      }
      if (instance && typeof instance.SetValues === "function")
      {
        instance.SetValues(next, context?.options);
      }
      else
      {
        Object.assign(instance, next);
      }
      return instance;
    },
    finalize(instance, context)
    {
      const childSetup = childSetups.get(instance);
      if (childSetup)
      {
        if (childSetup.target === "children")
        {
          if (typeof instance.SetRotation === "function") instance.SetRotation(childSetup.rotation);
          else instance.rotation = Array.from(childSetup.rotation);
          if (typeof instance.SetScaling === "function") instance.SetScaling(childSetup.scaling);
          else instance.scaling = Array.from(childSetup.scaling);
          if (typeof instance.SetTranslation === "function") instance.SetTranslation(childSetup.translation);
          else instance.translation = Array.from(childSetup.translation);
        }
        else
        {
          if (typeof instance.Setup === "function")
          {
            instance.Setup(
              childSetup.scaling,
              childSetup.rotation,
              childSetup.translation,
              childSetup.lowestLodVisible
            );
          }
          else
          {
            instance.scaling = Array.from(childSetup.scaling);
            instance.rotation = Array.from(childSetup.rotation);
            instance.translation = Array.from(childSetup.translation);
            instance.lowestLodVisible = childSetup.lowestLodVisible;
          }
          if (typeof instance.SetOrigin === "function") instance.SetOrigin(childSetup.origin);
          else instance.origin = childSetup.origin;
        }
      }
      if (context?.kind === "EveSpaceObjectDecal")
      {
        instance.SetIndices(decalIndices.get(instance) ?? []);
        instance.Initialize();
      }
      else if (context?.kind === "Tr2GpuUniqueEmitter")
      {
        const setup = emitterSetups.get(instance);
        if (setup) instance.Setup(setup.rate, setup.emitterData, setup.paramsData);
      }
      else if (context?.kind === "EveImpactOverlay")
      {
        const setup = impactSetups.get(instance);
        if (!setup) return;
        instance.Set(
          setup.hullDamageFlickerCurve,
          setup.armorImpactEmitter,
          setup.hullImpactEmitter,
          setup.armorDamageShader,
          setup.shieldImpactMesh,
          setup.shieldIsEllipsoid
        );
        instance.SetDamageLocatorCount(setup.damageLocatorCount);
        instance.Initialize();
      }
      else if (context?.kind === "EveSpriteSet")
      {
        for (const light of spriteLights.get(instance) ?? []) instance.AddLightFromSOF(light);
        instance.Initialize();
      }
      else if (context?.kind === "EveSpotlightSet" && typeof instance.AddLightFromSOF === "function")
      {
        for (const light of spotlightLights.get(instance) ?? []) instance.AddLightFromSOF(light);
        if (typeof instance.Initialize === "function") instance.Initialize();
        else if (typeof instance.Rebuild === "function") instance.Rebuild();
      }
      else if (context?.kind === "EvePlaneSet")
      {
        const setup = planeSetups.get(instance);
        if (setup)
        {
          instance.SetImageMapParameter(setup.imageMap);
          instance.SetLayerMap1Parameter(setup.layerMap1);
          instance.SetLayerMap2Parameter(setup.layerMap2);
          instance.SetMaskMapParameter(setup.maskMap);
          for (const light of setup.lights ?? []) instance.AddLightFromSOF(light);
        }
        instance.Initialize();
      }
      else if (context?.kind === "EvePlaneSetItem")
      {
        instance.blinkData = Array.from(planeBlinkData.get(instance) ?? [1, 0, 1, 0]);
      }
      else if (context?.kind === "EveSpriteLineSet" && typeof instance.AddLightFromSOF === "function")
      {
        for (const light of spriteLineLights.get(instance) ?? []) instance.AddLightFromSOF(light);
        if (typeof instance.Initialize === "function") instance.Initialize();
        else if (typeof instance.Rebuild === "function") instance.Rebuild();
      }
      else if (context?.kind === "EveHazeSet")
      {
        for (const light of hazeLights.get(instance) ?? []) instance.AddLightFromSOF(light);
        instance.Initialize();
      }
      else if (context?.kind === "EveBannerItem")
      {
        instance.reference = bannerReferences.get(instance) ?? 0;
      }
      else if (context?.kind === "EveBannerSet")
      {
        const setup = bannerSetups.get(instance);
        if (setup)
        {
          instance.SetPrimaryTextureParameter(setup.primaryTextureParameter ?? null);
          for (const light of setup.lights ?? []) instance.AddLightFromSOF(light);
        }
        instance.Initialize();
      }
      else if (context?.kind === "Tr2RuntimeInstanceData")
      {
        const setup = runtimeInstanceSetups.get(instance);
        if (setup && typeof instance.SetElementLayout === "function" && typeof instance.SetData === "function")
        {
          instance.SetElementLayout(setup.layout ?? []);
          instance.SetData(setup.rows ?? []);
          if (setup.boundingBox && typeof instance.SetBoundingBox === "function")
          {
            instance.SetBoundingBox(setup.boundingBox);
          }
          if (typeof instance.UpdateData === "function") instance.UpdateData();
        }
      }
      else if (context?.kind === "Tr2InstancedMesh")
      {
        const setup = instancedMeshSetups.get(instance);
        if (setup)
        {
          if (typeof instance.SetMeshResPath === "function") instance.SetMeshResPath(setup.geometryResPath ?? "");
          if ((!Array.isArray(instance.opaqueAreas) || instance.opaqueAreas.length === 0) && Array.isArray(setup.opaqueAreas))
          {
            instance.opaqueAreas = setup.opaqueAreas.slice();
          }
        }
      }
      else if (context?.kind === "EveChildMesh")
      {
        const setup = instancedChildSetups.get(instance);
        if (setup && typeof instance.SetInstanceTransforms === "function")
        {
          instance.SetInstanceTransforms(setup.instanceTransforms ?? []);
        }
      }
      else if (context?.kind === "EveChildInstancedMeshes")
      {
        const setup = sharedInstancedMeshesSetups.get(instance);
        if (setup && typeof instance.AddMesh === "function")
        {
          instance.Clear?.();
          for (const mesh of setup.meshes ?? [])
          {
            instance.AddMesh(
              mesh.geometryPath,
              mesh.castsShadow,
              mesh.reflectionMode,
              mesh.meshIndex,
              mesh.areas,
              mesh.instanceTransforms,
              mesh.sofHullName,
              mesh.sofLocatorSetName
            );
          }
        }
      }
      else if (context?.kind === "EveBoosterSet2")
      {
        const setup = boosterSetups.get(instance);
        if (setup && typeof instance.Add === "function")
        {
          instance.Clear?.();
          for (const item of setup.instances ?? [])
          {
            instance.Add(
              item.transform,
              item.functionality,
              item.hasTrail,
              item.atlasIndex0,
              item.atlasIndex1,
              item.lightScale
            );
          }
        }
        instance.Initialize?.();
      }
      else if (context?.kind === "EveChildContainer")
      {
        const setup = placementContainerSetups.get(instance);
        if (setup)
        {
          if (setup.animationOwner && typeof instance.SetAnimationOwner === "function")
          {
            instance.SetAnimationOwner(setup.animationOwner);
          }
          if (setup.alwaysOn !== undefined && typeof instance.SetAlwaysOn === "function")
          {
            instance.SetAlwaysOn(setup.alwaysOn);
          }
          if (setup.origin !== undefined && typeof instance.SetOrigin === "function")
          {
            instance.SetOrigin(setup.origin);
          }
          if (setup.isPlacementRoot !== undefined && typeof instance.SetIsPlacementRoot === "function")
          {
            instance.SetIsPlacementRoot(setup.isPlacementRoot);
          }
        }
      }
      else if (spaceObjectSetups.has(instance))
      {
        const setup = spaceObjectSetups.get(instance);
        if (setup?.swarmBehavior && typeof setup.swarmBehavior === "object")
        {
          Object.assign(instance, setup.swarmBehavior);
        }
        if (Array.isArray(setup?.inheritColorSet) && typeof instance.SetInheritProperties === "function")
        {
          instance.SetInheritProperties(setup.inheritColorSet);
        }
        if (setup?.initialize && typeof instance.Initialize === "function")
        {
          instance.Initialize();
        }
      }
    },
    getSpotlightLights(instance)
    {
      return spotlightLights.get(instance) ?? [];
    },
    getSpriteLineLights(instance)
    {
      return spriteLineLights.get(instance) ?? [];
    },
    getHazeLights(instance)
    {
      return hazeLights.get(instance) ?? [];
    },
    getBannerLights(instance)
    {
      return bannerSetups.get(instance)?.lights ?? [];
    },
    getChildSetup(instance)
    {
      return childSetups.get(instance) ?? null;
    },
    getPlacementContainerSetup(instance)
    {
      return placementContainerSetups.get(instance) ?? null;
    },
    getSpaceObjectSetup(instance)
    {
      return spaceObjectSetups.get(instance) ?? null;
    },
    getEmitterRateTargetId(instance)
    {
      return emitterRateTargetIds.get(instance) ?? -1;
    },
    getAudioEmitterSetup(instance)
    {
      return audioEmitterSetups.get(instance) ?? null;
    },
    getRuntimeInstanceSetup(instance)
    {
      return runtimeInstanceSetups.get(instance) ?? null;
    },
    getInstancedMeshSetup(instance)
    {
      return instancedMeshSetups.get(instance) ?? null;
    },
    getInstancedChildSetup(instance)
    {
      return instancedChildSetups.get(instance) ?? null;
    },
    getSharedInstancedMeshesSetup(instance)
    {
      return sharedInstancedMeshesSetups.get(instance) ?? null;
    },
    getBoosterSetup(instance)
    {
      return boosterSetups.get(instance) ?? null;
    }
  };
}
