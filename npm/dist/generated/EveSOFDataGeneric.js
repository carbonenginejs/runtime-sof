import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_turretAreaType, _init_extra_turretAreaType, _init_decalMinScreenSize, _init_extra_decalMinScreenSize, _init_shaderPrefix, _init_extra_shaderPrefix, _init_shaderPrefixAnimated, _init_extra_shaderPrefixAnimated, _init_variants, _init_extra_variants, _init_hullCategories, _init_extra_hullCategories, _init_visibilityGroups, _init_extra_visibilityGroups, _init_bannerShader, _init_extra_bannerShader, _init_swarm, _init_extra_swarm, _init_damage, _init_extra_damage, _init_hullDamage, _init_extra_hullDamage, _init_genericWreckMaterial, _init_extra_genericWreckMaterial, _init_areaShaders, _init_extra_areaShaders, _init_decalShaders, _init_extra_decalShaders, _init_materialPrefixes, _init_extra_materialPrefixes, _init_patternMaterialPrefixes, _init_extra_patternMaterialPrefixes, _init_hullCategoriesData, _init_extra_hullCategoriesData, _init_areaShaderLocation, _init_extra_areaShaderLocation, _init_decalShaderLocation, _init_extra_decalShaderLocation, _init_resPathDefaultAlliance, _init_extra_resPathDefaultAlliance, _init_resPathDefaultCeo, _init_extra_resPathDefaultCeo, _init_resPathDefaultCorp, _init_extra_resPathDefaultCorp;

/** EveSOFDataGeneric (eve) - generated from schema shapeHash 5f2c6dc7.... */
let _EveSOFDataGeneric;
class EveSOFDataGeneric extends CjsModel {
  static {
    ({
      e: [_init_turretAreaType, _init_extra_turretAreaType, _init_decalMinScreenSize, _init_extra_decalMinScreenSize, _init_shaderPrefix, _init_extra_shaderPrefix, _init_shaderPrefixAnimated, _init_extra_shaderPrefixAnimated, _init_variants, _init_extra_variants, _init_hullCategories, _init_extra_hullCategories, _init_visibilityGroups, _init_extra_visibilityGroups, _init_bannerShader, _init_extra_bannerShader, _init_swarm, _init_extra_swarm, _init_damage, _init_extra_damage, _init_hullDamage, _init_extra_hullDamage, _init_genericWreckMaterial, _init_extra_genericWreckMaterial, _init_areaShaders, _init_extra_areaShaders, _init_decalShaders, _init_extra_decalShaders, _init_materialPrefixes, _init_extra_materialPrefixes, _init_patternMaterialPrefixes, _init_extra_patternMaterialPrefixes, _init_hullCategoriesData, _init_extra_hullCategoriesData, _init_areaShaderLocation, _init_extra_areaShaderLocation, _init_decalShaderLocation, _init_extra_decalShaderLocation, _init_resPathDefaultAlliance, _init_extra_resPathDefaultAlliance, _init_resPathDefaultCeo, _init_extra_resPathDefaultCeo, _init_resPathDefaultCorp, _init_extra_resPathDefaultCorp],
      c: [_EveSOFDataGeneric, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataGeneric",
      family: "eve"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("AreaType")], 16, "turretAreaType"], [[io, io.persist, type, type.float32], 16, "decalMinScreenSize"], [[io, io.persist, type, type.string], 16, "shaderPrefix"], [[io, io.persist, type, type.string], 16, "shaderPrefixAnimated"], [[io, io.persist, void 0, type.list("EveSOFDataGenericVariant")], 16, "variants"], [[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "hullCategories"], [[io, io.persist, void 0, type.list("EveSOFDataVisibilityGroup")], 16, "visibilityGroups"], [[io, io.persist, void 0, type.struct("EveSOFDataGenericShader")], 16, "bannerShader"], [[io, io.persist, void 0, type.objectRef("EveSOFDataGenericSwarm")], 16, "swarm"], [[io, io.persist, void 0, type.objectRef("EveSOFDataGenericDamage")], 16, "damage"], [[io, io.persist, void 0, type.objectRef("EveSOFDataGenericHullDamage")], 16, "hullDamage"], [[io, io.persist, void 0, type.objectRef("EveSOFDataAreaMaterial")], 16, "genericWreckMaterial"], [[io, io.persist, void 0, type.list("EveSOFDataGenericShader")], 16, "areaShaders"], [[io, io.persist, void 0, type.list("EveSOFDataGenericDecalShader")], 16, "decalShaders"], [[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "materialPrefixes"], [[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "patternMaterialPrefixes"], [[io, io.persist, void 0, type.list("EveSOFDataGenericHullCategory")], 16, "hullCategoriesData"], [[io, io.persist, type, type.string], 16, "areaShaderLocation"], [[io, io.persist, type, type.string], 16, "decalShaderLocation"], [[io, io.persist, type, type.string], 16, "resPathDefaultAlliance"], [[io, io.persist, type, type.string], 16, "resPathDefaultCeo"], [[io, io.persist, type, type.string], 16, "resPathDefaultCorp"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_resPathDefaultCorp(this);
  }
  /** m_turretAreaType (EveSOFDataArea::AreaType - enum AreaType) [READ, PERSIST, ENUM] */
  turretAreaType = _init_turretAreaType(this, 0);

  /** m_decalMinScreenSizes[EveSOFDataHullDecalSetItem::USAGE_##sc] (float) [READWRITE, PERSIST] */
  decalMinScreenSize = (_init_extra_turretAreaType(this), _init_decalMinScreenSize(this, 0));

  /** m_shaderPrefix (std::string) [READWRITE, PERSIST] */
  shaderPrefix = (_init_extra_decalMinScreenSize(this), _init_shaderPrefix(this, ""));

  /** m_shaderPrefixAnimated (std::string) [READWRITE, PERSIST] */
  shaderPrefixAnimated = (_init_extra_shaderPrefix(this), _init_shaderPrefixAnimated(this, ""));

  /** m_variants (PEveSOFDataGenericVariantVector) [READ, PERSIST] */
  variants = (_init_extra_shaderPrefixAnimated(this), _init_variants(this, []));

  /** m_hullCategories (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  hullCategories = (_init_extra_variants(this), _init_hullCategories(this, []));

  /** m_visibilityGroups (PEveSOFDataVisibilityGroupVector) [READ, PERSIST] */
  visibilityGroups = (_init_extra_hullCategories(this), _init_visibilityGroups(this, []));

  /** m_bannerShader (PEveSOFDataGenericShader) [READ, PERSIST] */
  bannerShader = (_init_extra_visibilityGroups(this), _init_bannerShader(this, null));

  /** m_swarm (EveSOFDataGenericSwarmPtr) [READWRITE, PERSIST] */
  swarm = (_init_extra_bannerShader(this), _init_swarm(this, null));

  /** m_damage (EveSOFDataGenericDamagePtr) [READWRITE, PERSIST] */
  damage = (_init_extra_swarm(this), _init_damage(this, null));

  /** m_hullDamage (EveSOFDataGenericHullDamagePtr) [READWRITE, PERSIST] */
  hullDamage = (_init_extra_damage(this), _init_hullDamage(this, null));

  /** m_genericWreckMaterial (EveSOFDataAreaMaterialPtr) [READWRITE, PERSIST] */
  genericWreckMaterial = (_init_extra_hullDamage(this), _init_genericWreckMaterial(this, null));

  /** m_areaShaders (PEveSOFDataGenericShaderVector) [READ, PERSIST] */
  areaShaders = (_init_extra_genericWreckMaterial(this), _init_areaShaders(this, []));

  /** m_decalShaders (PEveSOFDataGenericDecalShaderVector) [READ, PERSIST] */
  decalShaders = (_init_extra_areaShaders(this), _init_decalShaders(this, []));

  /** m_materialPrefixes (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  materialPrefixes = (_init_extra_decalShaders(this), _init_materialPrefixes(this, []));

  /** m_patternMaterialPrefixes (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  patternMaterialPrefixes = (_init_extra_materialPrefixes(this), _init_patternMaterialPrefixes(this, []));

  /** m_hullCategoryData (PEveSOFDataGenericHullCategoryVector) [READ, PERSIST] */
  hullCategoriesData = (_init_extra_patternMaterialPrefixes(this), _init_hullCategoriesData(this, []));

  /** m_areaShaderLocation (std::string) [READWRITE, PERSIST] */
  areaShaderLocation = (_init_extra_hullCategoriesData(this), _init_areaShaderLocation(this, ""));

  /** m_decalShaderLocation (std::string) [READWRITE, PERSIST] */
  decalShaderLocation = (_init_extra_areaShaderLocation(this), _init_decalShaderLocation(this, ""));

  /** m_resPathDefaultAlliance (std::string) [READWRITE, PERSIST] */
  resPathDefaultAlliance = (_init_extra_decalShaderLocation(this), _init_resPathDefaultAlliance(this, ""));

  /** m_resPathDefaultCeo (std::string) [READWRITE, PERSIST] */
  resPathDefaultCeo = (_init_extra_resPathDefaultAlliance(this), _init_resPathDefaultCeo(this, ""));

  /** m_resPathDefaultCorp (std::string) [READWRITE, PERSIST] */
  resPathDefaultCorp = (_init_extra_resPathDefaultCeo(this), _init_resPathDefaultCorp(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataGeneric as EveSOFDataGeneric };
//# sourceMappingURL=EveSOFDataGeneric.js.map
