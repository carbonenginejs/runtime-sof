import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_isMirrored, _init_extra_isMirrored;

/** EveSOFDataPatternTransform (eve) - generated from schema shapeHash 67e6771a.... */
let _EveSOFDataPatternTra;
class EveSOFDataPatternTransform extends CjsModel {
  static {
    ({
      e: [_init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_isMirrored, _init_extra_isMirrored],
      c: [_EveSOFDataPatternTra, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataPatternTransform",
      family: "eve"
    })], [[[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.boolean], 16, "isMirrored"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isMirrored(this);
  }
  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = _init_position(this, vec3.create());

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_position(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_scaling(this), _init_rotation(this, quat.create()));

  /** m_isMirrored (bool) [READWRITE, PERSIST] */
  isMirrored = (_init_extra_rotation(this), _init_isMirrored(this, false));
  static {
    _initClass();
  }
}

export { _EveSOFDataPatternTra as EveSOFDataPatternTransform };
//# sourceMappingURL=EveSOFDataPatternTransform.js.map
