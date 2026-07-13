import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_areaTypes, _init_extra_areaTypes, _init_colorSet, _init_extra_colorSet, _init_logoSet, _init_extra_logoSet, _init_description, _init_extra_description, _init_children, _init_extra_children, _init_planeSets, _init_extra_planeSets, _init_spotlightSets, _init_extra_spotlightSets, _init_visibilityGroupSet, _init_extra_visibilityGroupSet, _init_resPathInsert, _init_extra_resPathInsert, _init_materialUsageMtl, _init_extra_materialUsageMtl, _init_materialUsageMtl2, _init_extra_materialUsageMtl2, _init_materialUsageMtl3, _init_extra_materialUsageMtl3, _init_materialUsageMtl4, _init_extra_materialUsageMtl4, _init_defaultPattern, _init_extra_defaultPattern, _init_defaultPatternLayer1MaterialName, _init_extra_defaultPatternLayer1MaterialName, _init_defaultPatternLayer2MaterialName, _init_extra_defaultPatternLayer2MaterialName, _init_defaultPatternName, _init_extra_defaultPatternName, _init_name, _init_extra_name;

/** EveSOFDataFaction (eve) - generated from schema shapeHash 1e118b8a.... */
let _EveSOFDataFaction;
class EveSOFDataFaction extends CjsModel {
  static {
    ({
      e: [_init_areaTypes, _init_extra_areaTypes, _init_colorSet, _init_extra_colorSet, _init_logoSet, _init_extra_logoSet, _init_description, _init_extra_description, _init_children, _init_extra_children, _init_planeSets, _init_extra_planeSets, _init_spotlightSets, _init_extra_spotlightSets, _init_visibilityGroupSet, _init_extra_visibilityGroupSet, _init_resPathInsert, _init_extra_resPathInsert, _init_materialUsageMtl, _init_extra_materialUsageMtl, _init_materialUsageMtl2, _init_extra_materialUsageMtl2, _init_materialUsageMtl3, _init_extra_materialUsageMtl3, _init_materialUsageMtl4, _init_extra_materialUsageMtl4, _init_defaultPattern, _init_extra_defaultPattern, _init_defaultPatternLayer1MaterialName, _init_extra_defaultPatternLayer1MaterialName, _init_defaultPatternLayer2MaterialName, _init_extra_defaultPatternLayer2MaterialName, _init_defaultPatternName, _init_extra_defaultPatternName, _init_name, _init_extra_name],
      c: [_EveSOFDataFaction, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataFaction",
      family: "eve"
    })], [[[io, io.persist, void 0, type.objectRef("EveSOFDataArea")], 16, "areaTypes"], [[io, io.persist, void 0, type.objectRef("EveSOFDataFactionColorSet")], 16, "colorSet"], [[io, io.persist, void 0, type.objectRef("EveSOFDataLogoSet")], 16, "logoSet"], [[io, io.persist, type, type.string], 16, "description"], [[io, io.persist, void 0, type.list("EveSOFDataFactionChild")], 16, "children"], [[io, io.persist, void 0, type.list("EveSOFDataFactionPlaneSet")], 16, "planeSets"], [[io, io.persist, void 0, type.list("EveSOFDataFactionSpotlightSet")], 16, "spotlightSets"], [[io, io.persist, void 0, type.objectRef("EveSOFDataFactionVisibilityGroupSet")], 16, "visibilityGroupSet"], [[io, io.persist, type, type.string], 16, "resPathInsert"], [[io, io.persist, type, type.int32], 16, "materialUsageMtl1"], [[io, io.persist, type, type.int32], 16, "materialUsageMtl2"], [[io, io.persist, type, type.int32], 16, "materialUsageMtl3"], [[io, io.persist, type, type.int32], 16, "materialUsageMtl4"], [[io, io.persist, void 0, type.objectRef("EveSOFDataPatternLayer")], 16, "defaultPattern"], [[io, io.persist, type, type.string], 16, "defaultPatternLayer1MaterialName"], [[io, io.persist, type, type.string], 16, "defaultPatternLayer2MaterialName"], [[io, io.persist, type, type.string], 16, "defaultPatternName"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_areaTypes (EveSOFDataAreaPtr) [READWRITE, PERSIST] */
  areaTypes = _init_areaTypes(this, null);

  /** m_colorSet (EveSOFDataFactionColorSetPtr) [READWRITE, PERSIST] */
  colorSet = (_init_extra_areaTypes(this), _init_colorSet(this, null));

  /** m_logoSet (EveSOFDataLogoSetPtr) [READWRITE, PERSIST] */
  logoSet = (_init_extra_colorSet(this), _init_logoSet(this, null));

  /** m_description (std::string) [READWRITE, PERSIST] */
  description = (_init_extra_logoSet(this), _init_description(this, ""));

  /** m_children (PEveSOFDataFactionChildVector) [READ, PERSIST] */
  children = (_init_extra_description(this), _init_children(this, []));

  /** m_planeSets (PEveSOFDataFactionPlaneSetVector) [READ, PERSIST] */
  planeSets = (_init_extra_children(this), _init_planeSets(this, []));

  /** m_spotlightSets (PEveSOFDataFactionSpotlightSetVector) [READ, PERSIST] */
  spotlightSets = (_init_extra_planeSets(this), _init_spotlightSets(this, []));

  /** m_visibilityGroupSet (EveSOFDataFactionVisibilityGroupSetPtr) [READWRITE, PERSIST] */
  visibilityGroupSet = (_init_extra_spotlightSets(this), _init_visibilityGroupSet(this, null));

  /** m_resPathInsert (std::string) [READWRITE, PERSIST] */
  resPathInsert = (_init_extra_visibilityGroupSet(this), _init_resPathInsert(this, ""));

  /** m_materialUsageMtl1 (int32_t) [READWRITE, PERSIST] */
  materialUsageMtl1 = (_init_extra_resPathInsert(this), _init_materialUsageMtl(this, 0));

  /** m_materialUsageMtl2 (int32_t) [READWRITE, PERSIST] */
  materialUsageMtl2 = (_init_extra_materialUsageMtl(this), _init_materialUsageMtl2(this, 1));

  /** m_materialUsageMtl3 (int32_t) [READWRITE, PERSIST] */
  materialUsageMtl3 = (_init_extra_materialUsageMtl2(this), _init_materialUsageMtl3(this, 2));

  /** m_materialUsageMtl4 (int32_t) [READWRITE, PERSIST] */
  materialUsageMtl4 = (_init_extra_materialUsageMtl3(this), _init_materialUsageMtl4(this, 3));

  /** m_defaultPattern (EveSOFDataPatternLayerPtr) [READWRITE, PERSIST] */
  defaultPattern = (_init_extra_materialUsageMtl4(this), _init_defaultPattern(this, null));

  /** m_defaultPatternLayer1MaterialName (std::string) [READWRITE, PERSIST] */
  defaultPatternLayer1MaterialName = (_init_extra_defaultPattern(this), _init_defaultPatternLayer1MaterialName(this, ""));

  /** m_defaultPatternLayer2MaterialName (std::string) [READWRITE, PERSIST] */
  defaultPatternLayer2MaterialName = (_init_extra_defaultPatternLayer1MaterialName(this), _init_defaultPatternLayer2MaterialName(this, ""));

  /** m_defaultPatternName (std::string) [READWRITE, PERSIST] */
  defaultPatternName = (_init_extra_defaultPatternLayer2MaterialName(this), _init_defaultPatternName(this, ""));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_defaultPatternName(this), _init_name(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataFaction as EveSOFDataFaction };
//# sourceMappingURL=EveSOFDataFaction.js.map
