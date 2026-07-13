import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_visibilityGroups, _init_extra_visibilityGroups;

/** EveSOFDataFactionVisibilityGroupSet (eve) - generated from schema shapeHash da3a6331.... */
let _EveSOFDataFactionVis;
class EveSOFDataFactionVisibilityGroupSet extends CjsModel {
  static {
    ({
      e: [_init_visibilityGroups, _init_extra_visibilityGroups],
      c: [_EveSOFDataFactionVis, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataFactionVisibilityGroupSet",
      family: "eve"
    })], [[[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "visibilityGroups"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_visibilityGroups(this);
  }
  /** m_visibilityGroups (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  visibilityGroups = _init_visibilityGroups(this, []);
  static {
    _initClass();
  }
}

export { _EveSOFDataFactionVis as EveSOFDataFactionVisibilityGroupSet };
//# sourceMappingURL=EveSOFDataFactionVisibilityGroupSet.js.map
