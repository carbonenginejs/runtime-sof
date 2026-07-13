import assert from "node:assert/strict";
import { test } from "node:test";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import {
  EveSOFDataParameter,
  EveSOFDataTexture,
  EveSOFDataTransform,
} from "../npm/dist/data/index.js";
import { EveSOFDataPatternLayerProperties } from "../npm/dist/generated/EveSOFDataPatternLayerProperties.js";
import { EveSOFDataHullExtensionPlacement } from "../npm/dist/generated/EveSOFDataHullExtensionPlacement.js";
import { EveSOFDataHullExtensionPlacementDistributionDepletionCounter } from "../npm/dist/generated/EveSOFDataHullExtensionPlacementDistributionDepletionCounter.js";
import { EveSOFDataHullExtensionPlacementDistributionMapGraphicSettings } from "../npm/dist/generated/EveSOFDataHullExtensionPlacementDistributionMapGraphicSettings.js";
import { EveSOFDataHullExtensionPlacementDistributionParentMatch } from "../npm/dist/generated/EveSOFDataHullExtensionPlacementDistributionParentMatch.js";
import { EveSOFDataHullExtensionPlacementDistributionRandomChance } from "../npm/dist/generated/EveSOFDataHullExtensionPlacementDistributionRandomChance.js";

test("EveSOFDataParameter: faithful defaults + schema registration", () => {
  const p = new EveSOFDataParameter();
  assert.equal(p.name, "");
  assert.deepEqual([...p.value], [0, 0, 0, 0]);
  // Class registered under its Carbon name in the generated Eve schema family.
  assert.equal(CjsSchema.getClass("EveSOFDataParameter"), EveSOFDataParameter);
  // field types mapped from carbon m_name (BlueSharedString) / m_value (Vector4)
  assert.equal(
    CjsSchema.getField(EveSOFDataParameter, "name").type.kind,
    "string",
  );
  assert.equal(
    CjsSchema.getField(EveSOFDataParameter, "value").type.kind,
    "vec4",
  );
});

test("EveSOFDataTexture: faithful defaults + schema registration", () => {
  const t = new EveSOFDataTexture();
  assert.equal(t.resFilePath, "");
  assert.equal(t.name, "");
  assert.equal(CjsSchema.getClass("EveSOFDataTexture"), EveSOFDataTexture);
  assert.equal(CjsSchema.getField(EveSOFDataTexture, "resFilePath").type.kind, "string");
});

test("EveSOFDataTransform: identity defaults + schema registration", () => {
  const x = new EveSOFDataTransform();
  assert.deepEqual([...x.position], [0, 0, 0]);
  assert.deepEqual([...x.rotation], [0, 0, 0, 1]);
  assert.deepEqual([...x.scaling], [1, 1, 1]);
  assert.equal(
    CjsSchema.getField(EveSOFDataTransform, "position").type.kind,
    "vec3",
  );
  assert.equal(
    CjsSchema.getField(EveSOFDataTransform, "rotation").type.kind,
    "quat",
  );
  assert.equal(
    CjsSchema.getField(EveSOFDataTransform, "boneIndex").type.kind,
    "int32",
  );
});

test("EveSOFDataPatternLayerProperties: Carbon applicability defaults", () => {
  const properties = new EveSOFDataPatternLayerProperties();
  for (const name of [
    "Primary",
    "Glass",
    "Sails",
    "Reactor",
    "Darkhull",
    "Rock",
    "Monument",
    "Ornament",
    "SimplePrimary",
  ])
  {
    assert.equal(properties[name], true, name);
  }
});

test("SOF extension placements preserve Carbon constructed refs and inherited names", () => {
  const first = new EveSOFDataHullExtensionPlacement();
  const second = new EveSOFDataHullExtensionPlacement();

  assert.equal(first.distribution.constructor.name, "EveSOFDataHullExtensionPlacementDistributionPlacement");
  assert.equal(first.descriptor.constructor.name, "EveSOFDNADescriptor");
  assert.notEqual(first.distribution, second.distribution);
  assert.notEqual(first.descriptor, second.descriptor);

  const parent = new EveSOFDataHullExtensionPlacementDistributionParentMatch();
  const nextParent = new EveSOFDataHullExtensionPlacementDistributionParentMatch();
  assert.equal(parent.parentDescriptor.constructor.name, "EveSOFDNADescriptor");
  assert.notEqual(parent.parentDescriptor, nextParent.parentDescriptor);

  for (const condition of [
    parent,
    new EveSOFDataHullExtensionPlacementDistributionDepletionCounter(),
    new EveSOFDataHullExtensionPlacementDistributionMapGraphicSettings(),
    new EveSOFDataHullExtensionPlacementDistributionRandomChance(),
  ])
  {
    assert.equal(condition.name, "");
  }
});
