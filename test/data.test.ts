import assert from "node:assert/strict";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import {
  EveSOFDataParameter,
  EveSOFDataTexture,
  EveSOFDataTransform,
} from "../src/data/index.ts";

Deno.test("EveSOFDataParameter: faithful defaults + schema registration", () => {
  const p = new EveSOFDataParameter();
  assert.equal(p.name, "");
  assert.deepEqual(p.value, [0, 0, 0, 0]);
  // class registered under its carbon name (family "sof" set via the class decorator)
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

Deno.test("EveSOFDataTexture: faithful defaults + schema registration", () => {
  const t = new EveSOFDataTexture();
  assert.equal(t.resFilePath, "");
  assert.equal(t.name, "");
  assert.equal(CjsSchema.getClass("EveSOFDataTexture"), EveSOFDataTexture);
  assert.equal(
    CjsSchema.getField(EveSOFDataTexture, "resFilePath").type.kind,
    "path",
  );
});

Deno.test("EveSOFDataTransform: identity defaults + schema registration", () => {
  const x = new EveSOFDataTransform();
  assert.deepEqual(x.position, [0, 0, 0]);
  assert.deepEqual(x.rotation, [0, 0, 0, 1]);
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
