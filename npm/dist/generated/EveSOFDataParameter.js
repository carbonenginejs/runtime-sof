import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_name, _init_extra_name, _init_value, _init_extra_value;

/** EveSOFDataParameter (eve) - generated from schema shapeHash 148eba9e.... */
let _EveSOFDataParameter;
class EveSOFDataParameter extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_value, _init_extra_value],
      c: [_EveSOFDataParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataParameter",
      family: "eve"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.vec4], 16, "value"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_value(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_value (Vector4) [READWRITE, PERSIST] */
  value = (_init_extra_name(this), _init_value(this, vec4.create()));
  static {
    _initClass();
  }
}

export { _EveSOFDataParameter as EveSOFDataParameter };
//# sourceMappingURL=EveSOFDataParameter.js.map
