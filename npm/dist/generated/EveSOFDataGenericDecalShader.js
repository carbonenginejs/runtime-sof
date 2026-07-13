import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_parameters, _init_extra_parameters, _init_defaultTextures, _init_extra_defaultTextures, _init_parentTextures, _init_extra_parentTextures, _init_additive, _init_extra_additive, _init_shader, _init_extra_shader;

/** EveSOFDataGenericDecalShader (eve) - generated from schema shapeHash ce334d46.... */
let _EveSOFDataGenericDec;
class EveSOFDataGenericDecalShader extends CjsModel {
  static {
    ({
      e: [_init_parameters, _init_extra_parameters, _init_defaultTextures, _init_extra_defaultTextures, _init_parentTextures, _init_extra_parentTextures, _init_additive, _init_extra_additive, _init_shader, _init_extra_shader],
      c: [_EveSOFDataGenericDec, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataGenericDecalShader",
      family: "eve"
    })], [[[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "parameters"], [[io, io.persist, void 0, type.list("EveSOFDataTexture")], 16, "defaultTextures"], [[io, io.persist, void 0, type.list("EveSOFDataGenericString")], 16, "parentTextures"], [[io, io.persist, type, type.boolean], 16, "additive"], [[io, io.persist, type, type.string], 16, "shader"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shader(this);
  }
  /** m_parameters (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  parameters = _init_parameters(this, []);

  /** m_defaultTextures (PEveSOFDataTextureVector) [READ, PERSIST] */
  defaultTextures = (_init_extra_parameters(this), _init_defaultTextures(this, []));

  /** m_parentTextures (PEveSOFDataGenericStringVector) [READ, PERSIST] */
  parentTextures = (_init_extra_defaultTextures(this), _init_parentTextures(this, []));

  /** m_additive (bool) [READ, PERSIST] */
  additive = (_init_extra_parentTextures(this), _init_additive(this, false));

  /** m_shader (BlueSharedString) [READWRITE, PERSIST] */
  shader = (_init_extra_additive(this), _init_shader(this, ""));
  static {
    _initClass();
  }
}

export { _EveSOFDataGenericDec as EveSOFDataGenericDecalShader };
//# sourceMappingURL=EveSOFDataGenericDecalShader.js.map
