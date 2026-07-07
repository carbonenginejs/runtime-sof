// Ported from CarbonEngine (MIT, © 2026 CCP Games) — https://github.com/carbonengine/trinity
//   trinity/Eve/SpaceObjectFactory/EveSOFData.h (EveSOFDataTransform)
import { type } from "@carbonenginejs/core-types/schema";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Quat, Vec3 } from "@carbonenginejs/core-math/types";

/** A local transform (position / rotation / scale) with an optional bone binding. */
@type.define({ className: "EveSOFDataTransform", family: "sof" })
export class EveSOFDataTransform {
  /** m_position (Vector3) */
  @type.vec3
  position: Vec3 = vec3.create();

  /** m_rotation (Quaternion — identity default) */
  @type.quat
  rotation: Quat = quat.create();

  // NOTE: Vector3 default-constructs to (0,0,0); whether EveSOFData.cpp's ctor overrides
  // m_scaling to (1,1,1) is unverified here — confirm against the .cpp ctor before relying on it.
  /** m_scaling (Vector3) */
  @type.vec3
  scaling: Vec3 = vec3.fromValues(1, 1, 1);

  /** m_boneIndex (int32_t) */
  @type.int32
  boneIndex = -1;
}
