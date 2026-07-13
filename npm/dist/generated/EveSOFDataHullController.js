import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_buildFilter, _init_extra_buildFilter, _init_path, _init_extra_path;

/** EveSOFDataHullController (eve) - generated from schema shapeHash ef1e599d.... */
let _EveSOFDataHullContro;
class EveSOFDataHullController extends CjsModel {
  static {
    ({
      e: [_init_buildFilter, _init_extra_buildFilter, _init_path, _init_extra_path],
      c: [_EveSOFDataHullContro, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataHullController",
      family: "eve"
    })], [[[io, io.persist, type, type.uint32], 16, "buildFilter"], [[io, io.persist, type, type.string], 16, "path"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_path(this);
  }
  /** m_buildFilter (uint32_t) [READWRITE, PERSIST] */
  buildFilter = _init_buildFilter(this, 0xffffffff);

  /** m_path (std::string) [READWRITE, PERSIST] */
  path = (_init_extra_buildFilter(this), _init_path(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataHullContro as EveSOFDataHullController };
//# sourceMappingURL=EveSOFDataHullController.js.map
