import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_armorImpactParameters, _init_extra_armorImpactParameters, _init_armorImpactTextures, _init_extra_armorImpactTextures, _init_shieldImpactParameters, _init_extra_shieldImpactParameters, _init_shieldImpactTextures, _init_extra_shieldImpactTextures;

/** EveSOFDataRaceDamage (eve) - generated from schema shapeHash 87369617.... */
let _EveSOFDataRaceDamage;
class EveSOFDataRaceDamage extends CjsModel {
  static {
    ({
      e: [_init_armorImpactParameters, _init_extra_armorImpactParameters, _init_armorImpactTextures, _init_extra_armorImpactTextures, _init_shieldImpactParameters, _init_extra_shieldImpactParameters, _init_shieldImpactTextures, _init_extra_shieldImpactTextures],
      c: [_EveSOFDataRaceDamage, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataRaceDamage",
      family: "eve"
    })], [[[io, io.persist, void 0, type.list("EveSOFDataParameter")], 16, "armorImpactParameters"], [[io, io.persist, void 0, type.list("EveSOFDataTexture")], 16, "armorImpactTextures"], [[io, io.persist, void 0, type.list("EveSOFDataParameter")], 16, "shieldImpactParameters"], [[io, io.persist, void 0, type.list("EveSOFDataTexture")], 16, "shieldImpactTextures"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shieldImpactTextures(this);
  }
  /** m_armorImpactParameters (PEveSOFDataParameterVector) [READ, PERSIST] */
  armorImpactParameters = _init_armorImpactParameters(this, []);

  /** m_armorImpactTextures (PEveSOFDataTextureVector) [READ, PERSIST] */
  armorImpactTextures = (_init_extra_armorImpactParameters(this), _init_armorImpactTextures(this, []));

  /** m_shieldImpactParameters (PEveSOFDataParameterVector) [READ, PERSIST] */
  shieldImpactParameters = (_init_extra_armorImpactTextures(this), _init_shieldImpactParameters(this, []));

  /** m_shieldImpactTextures (PEveSOFDataTextureVector) [READ, PERSIST] */
  shieldImpactTextures = (_init_extra_shieldImpactParameters(this), _init_shieldImpactTextures(this, []));
  static {
    _initClass();
  }
}

export { _EveSOFDataRaceDamage as EveSOFDataRaceDamage };
//# sourceMappingURL=EveSOFDataRaceDamage.js.map
