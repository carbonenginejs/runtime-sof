// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/Eve/SpaceObjectFactory/EveSOFData.h
import { type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";

/** Runtime representation of Carbon's 44-byte EveSofDataMeshInstance structure. */
@type.define({ className: "EveSofDataMeshInstance", family: "eve" })
export class EveSofDataMeshInstance extends CjsModel
{

  /** Quaternion at byte offset 0. */
  @type.quat
  rotation = quat.create();

  /** Vector3 at byte offset 16. Identity is the runtime-friendly default. */
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  /** Vector3 at byte offset 28. */
  @type.vec3
  translation = vec3.create();

  /** Signed int32 at byte offset 40. */
  @type.int32
  boneIndex = 0;

}
