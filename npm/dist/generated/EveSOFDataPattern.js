import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_projections, _init_extra_projections, _init_applicationGroups, _init_extra_applicationGroups, _init_layer, _init_extra_layer, _init_layer2, _init_extra_layer2, _init_name, _init_extra_name, _init_sof, _init_extra_sof;

/** EveSOFDataPattern (eve) - generated from schema shapeHash f8a30280.... */
let _EveSOFDataPattern;
class EveSOFDataPattern extends CjsModel {
  static {
    ({
      e: [_init_projections, _init_extra_projections, _init_applicationGroups, _init_extra_applicationGroups, _init_layer, _init_extra_layer, _init_layer2, _init_extra_layer2, _init_name, _init_extra_name, _init_sof, _init_extra_sof],
      c: [_EveSOFDataPattern, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataPattern",
      family: "eve"
    })], [[[io, io.persist, void 0, type.list("EveSOFDataPatternPerHull")], 16, "projections"], [[io, io.persist, void 0, type.list("EveSOFDataPatternApplicationGroup")], 16, "applicationGroups"], [[io, io.persist, void 0, type.objectRef("EveSOFDataPatternLayer")], 16, "layer1"], [[io, io.persist, void 0, type.objectRef("EveSOFDataPatternLayer")], 16, "layer2"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "sof6"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_sof(this);
  }
  /** m_projections (PEveSOFDataPatternPerHullVector) [READ, PERSIST] */
  projections = _init_projections(this, []);

  /** m_applicationGroups (PEveSOFDataPatternApplicationGroupVector) [READ, PERSIST] */
  applicationGroups = (_init_extra_projections(this), _init_applicationGroups(this, []));

  /** m_layer1 (EveSOFDataPatternLayerPtr) [READWRITE, PERSIST] */
  layer1 = (_init_extra_applicationGroups(this), _init_layer(this, null));

  /** m_layer2 (EveSOFDataPatternLayerPtr) [READWRITE, PERSIST] */
  layer2 = (_init_extra_layer(this), _init_layer2(this, null));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_layer2(this), _init_name(this, ""));

  /** m_sof6 (bool) [READWRITE, PERSIST] */
  sof6 = (_init_extra_name(this), _init_sof(this, false));
  static {
    _initClass();
  }
}

export { _EveSOFDataPattern as EveSOFDataPattern };
//# sourceMappingURL=EveSOFDataPattern.js.map
