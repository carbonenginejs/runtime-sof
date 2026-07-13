import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_textures, _init_extra_textures;

/** EveSOFDataLogo (eve) - generated from schema shapeHash ce883998.... */
let _EveSOFDataLogo;
class EveSOFDataLogo extends CjsModel {
  static {
    ({
      e: [_init_textures, _init_extra_textures],
      c: [_EveSOFDataLogo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataLogo",
      family: "eve"
    })], [[[io, io.persist, void 0, type.list("EveSOFDataTexture")], 16, "textures"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_textures(this);
  }
  /** m_textures (PEveSOFDataTextureVector) [READ, PERSIST] */
  textures = _init_textures(this, []);
  static {
    _initClass();
  }
}

export { _EveSOFDataLogo as EveSOFDataLogo };
//# sourceMappingURL=EveSOFDataLogo.js.map
