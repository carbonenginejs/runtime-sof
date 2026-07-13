import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_hullPrimaryHeatColorType, _init_extra_hullPrimaryHeatColorType, _init_hullReactorHeatColorType, _init_extra_hullReactorHeatColorType, _init_booster, _init_extra_booster, _init_damage, _init_extra_damage, _init_name, _init_extra_name;

/** EveSOFDataRace (eve) - generated from schema shapeHash f7cdba2b.... */
let _EveSOFDataRace;
class EveSOFDataRace extends CjsModel {
  static {
    ({
      e: [_init_hullPrimaryHeatColorType, _init_extra_hullPrimaryHeatColorType, _init_hullReactorHeatColorType, _init_extra_hullReactorHeatColorType, _init_booster, _init_extra_booster, _init_damage, _init_extra_damage, _init_name, _init_extra_name],
      c: [_EveSOFDataRace, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataRace",
      family: "eve"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("ColorType")], 16, "hullPrimaryHeatColorType"], [[io, io.persist, type, type.int32, void 0, schema.enum("ColorType")], 16, "hullReactorHeatColorType"], [[io, io.persist, void 0, type.objectRef("EveSOFDataBooster")], 16, "booster"], [[io, io.persist, void 0, type.objectRef("EveSOFDataRaceDamage")], 16, "damage"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_hullPrimaryHeatColorType (SOFDataFactionColorChooser::ColorType - enum ColorType) [READWRITE, PERSIST, ENUM] */
  hullPrimaryHeatColorType = _init_hullPrimaryHeatColorType(this, 0);

  /** m_hullReactorHeatColorType (SOFDataFactionColorChooser::ColorType - enum ColorType) [READWRITE, PERSIST, ENUM] */
  hullReactorHeatColorType = (_init_extra_hullPrimaryHeatColorType(this), _init_hullReactorHeatColorType(this, 0));

  /** m_booster (EveSOFDataBoosterPtr) [READWRITE, PERSIST] */
  booster = (_init_extra_hullReactorHeatColorType(this), _init_booster(this, null));

  /** m_damage (EveSOFDataRaceDamagePtr) [READWRITE, PERSIST] */
  damage = (_init_extra_booster(this), _init_damage(this, null));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_damage(this), _init_name(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataRace as EveSOFDataRace };
//# sourceMappingURL=EveSOFDataRace.js.map
