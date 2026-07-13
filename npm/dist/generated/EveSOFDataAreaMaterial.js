import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_colorType, _init_extra_colorType, _init_material, _init_extra_material, _init_material2, _init_extra_material2, _init_material3, _init_extra_material3, _init_material4, _init_extra_material4;

/** EveSOFDataAreaMaterial (eve) - generated from schema shapeHash 19be099b.... */
let _EveSOFDataAreaMateri;
class EveSOFDataAreaMaterial extends CjsModel {
  static {
    ({
      e: [_init_colorType, _init_extra_colorType, _init_material, _init_extra_material, _init_material2, _init_extra_material2, _init_material3, _init_extra_material3, _init_material4, _init_extra_material4],
      c: [_EveSOFDataAreaMateri, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataAreaMaterial",
      family: "eve"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("ColorType")], 16, "colorType"], [[io, io.persist, type, type.string], 16, "material1"], [[io, io.persist, type, type.string], 16, "material2"], [[io, io.persist, type, type.string], 16, "material3"], [[io, io.persist, type, type.string], 16, "material4"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_material4(this);
  }
  /** m_glowColorType (SOFDataFactionColorChooser::ColorType - enum ColorType) [READWRITE, PERSIST, ENUM] */
  colorType = _init_colorType(this, 0);

  /** m_material[MATERIAL1] (std::string) [READWRITE, PERSIST] */
  material1 = (_init_extra_colorType(this), _init_material(this, ""));

  /** m_material[MATERIAL2] (std::string) [READWRITE, PERSIST] */
  material2 = (_init_extra_material(this), _init_material2(this, ""));

  /** m_material[MATERIAL3] (std::string) [READWRITE, PERSIST] */
  material3 = (_init_extra_material2(this), _init_material3(this, ""));

  /** m_material[MATERIAL4] (std::string) [READWRITE, PERSIST] */
  material4 = (_init_extra_material3(this), _init_material4(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataAreaMateri as EveSOFDataAreaMaterial };
//# sourceMappingURL=EveSOFDataAreaMaterial.js.map
