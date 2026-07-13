import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass;
let _EveSOFDataBlink;
class EveSOFDataBlink extends CjsModel {
  static {
    [_EveSOFDataBlink, _initClass] = _applyDecs2311(this, [type.define({
      className: "EveSOFDataBlink",
      family: "eve"
    })], [], 0, void 0, CjsModel).c;
  }
  /** Carbon currently exposes an empty SOF blink value shape. */
  IsEmpty() {
    return true;
  }
  static {
    _initClass();
  }
}

export { _EveSOFDataBlink as EveSOFDataBlink };
//# sourceMappingURL=EveSOFDataBlink.js.map
