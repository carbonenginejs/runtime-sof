// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObjectFactory\EveSOFData.h
//         BLUE_CLASS( EveSOFDataTransform ) : public IRoot
import { type } from "@carbonenginejs/core-types/schema";

/** A local transform (position / rotation / scale) with an optional bone binding. */
@type.define({ className: "EveSOFDataTransform", family: "sof" })
export class EveSOFDataTransform {
  /** m_position (Vector3) */
  @type.vec3
  position: number[] = [0, 0, 0];

  /** m_rotation (Quaternion — identity default) */
  @type.quat
  rotation: number[] = [0, 0, 0, 1];

  // NOTE: Vector3 default-constructs to (0,0,0); whether EveSOFData.cpp's ctor overrides
  // m_scaling to (1,1,1) is unverified here — confirm against the .cpp ctor before relying on it.
  /** m_scaling (Vector3) */
  @type.vec3
  scaling: number[] = [1, 1, 1];

  /** m_boneIndex (int32_t) */
  @type.int32
  boneIndex = -1;
}
