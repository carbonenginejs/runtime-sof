import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_translation, _init_extra_translation, _init_boneIndex, _init_extra_boneIndex;

/** EveSofDataMeshInstance (eve) - generated from schema shapeHash ccdfbcaa.... */
let _EveSofDataMeshInstan;
class EveSofDataMeshInstance extends CjsModel {
  static {
    ({
      e: [_init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_translation, _init_extra_translation, _init_boneIndex, _init_extra_boneIndex],
      c: [_EveSofDataMeshInstan, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSofDataMeshInstance",
      family: "eve"
    })], [[[type, type.quat], 16, "rotation"], [[type, type.vec3], 16, "scaling"], [[type, type.vec3], 16, "translation"], [[type, type.int32], 16, "boneIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneIndex(this);
  }
  /** rotation (Quaternion) */
  rotation = _init_rotation(this, quat.create());

  /** scaling (Vector3) */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** translation (Vector3) */
  translation = (_init_extra_scaling(this), _init_translation(this, vec3.create()));

  /** boneIndex (int32_t) */
  boneIndex = (_init_extra_translation(this), _init_boneIndex(this, 0));
  static {
    _initClass();
  }
}

export { _EveSofDataMeshInstan as EveSofDataMeshInstance };
//# sourceMappingURL=EveSofDataMeshInstance.js.map
