import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_fullname, _init_extra_fullname, _init_shortname, _init_extra_shortname, _init_materialIdx, _init_extra_materialIdx;

/** EveSOFUtilsParameterName (eve) - generated from schema shapeHash 9a4fd6e6.... */
let _EveSOFUtilsParameter;
class EveSOFUtilsParameterName extends CjsModel {
  static {
    ({
      e: [_init_fullname, _init_extra_fullname, _init_shortname, _init_extra_shortname, _init_materialIdx, _init_extra_materialIdx],
      c: [_EveSOFUtilsParameter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFUtilsParameterName",
      family: "eve"
    })], [[[type, type.string], 16, "fullname"], [[type, type.string], 16, "shortname"], [[type, type.int32], 16, "materialIdx"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_materialIdx(this);
  }
  /** m_fullname (std::string) */
  fullname = _init_fullname(this, "");

  /** m_shortname (std::string) */
  shortname = (_init_extra_fullname(this), _init_shortname(this, ""));

  /** m_materialIdx (int32_t) */
  materialIdx = (_init_extra_shortname(this), _init_materialIdx(this, -1));
  static {
    _initClass();
  }
}

export { _EveSOFUtilsParameter as EveSOFUtilsParameterName };
//# sourceMappingURL=EveSOFUtilsParameterName.js.map
