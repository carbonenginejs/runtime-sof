import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_transformLayer, _init_extra_transformLayer, _init_transformLayer2, _init_extra_transformLayer2, _init_name, _init_extra_name;

/** EveSOFDataPatternPerHull (eve) - generated from schema shapeHash ba16415a.... */
let _EveSOFDataPatternPer;
class EveSOFDataPatternPerHull extends CjsModel {
  static {
    ({
      e: [_init_transformLayer, _init_extra_transformLayer, _init_transformLayer2, _init_extra_transformLayer2, _init_name, _init_extra_name],
      c: [_EveSOFDataPatternPer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataPatternPerHull",
      family: "eve"
    })], [[[io, io.persist, void 0, type.objectRef("EveSOFDataPatternTransform")], 16, "transformLayer1"], [[io, io.persist, void 0, type.objectRef("EveSOFDataPatternTransform")], 16, "transformLayer2"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_transformLayer1 (EveSOFDataPatternTransformPtr) [READWRITE, PERSIST] */
  transformLayer1 = _init_transformLayer(this, null);

  /** m_transformLayer2 (EveSOFDataPatternTransformPtr) [READWRITE, PERSIST] */
  transformLayer2 = (_init_extra_transformLayer(this), _init_transformLayer2(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_transformLayer2(this), _init_name(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataPatternPer as EveSOFDataPatternPerHull };
//# sourceMappingURL=EveSOFDataPatternPerHull.js.map
