import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_materialSource, _init_extra_materialSource, _init_projectionTypeU, _init_extra_projectionTypeU, _init_projectionTypeV, _init_extra_projectionTypeV, _init_textureName, _init_extra_textureName, _init_textureResFilePath, _init_extra_textureResFilePath, _init_isTargetMtl, _init_extra_isTargetMtl, _init_isTargetMtl2, _init_extra_isTargetMtl2, _init_isTargetMtl3, _init_extra_isTargetMtl3, _init_isTargetMtl4, _init_extra_isTargetMtl4;

/** EveSOFDataPatternLayer (eve) - generated from schema shapeHash ea568a07.... */
let _EveSOFDataPatternLay;
class EveSOFDataPatternLayer extends CjsModel {
  static {
    ({
      e: [_init_materialSource, _init_extra_materialSource, _init_projectionTypeU, _init_extra_projectionTypeU, _init_projectionTypeV, _init_extra_projectionTypeV, _init_textureName, _init_extra_textureName, _init_textureResFilePath, _init_extra_textureResFilePath, _init_isTargetMtl, _init_extra_isTargetMtl, _init_isTargetMtl2, _init_extra_isTargetMtl2, _init_isTargetMtl3, _init_extra_isTargetMtl3, _init_isTargetMtl4, _init_extra_isTargetMtl4],
      c: [_EveSOFDataPatternLay, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSOFDataPatternLayer",
      family: "eve"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("MaterialSource")], 16, "materialSource"], [[io, io.persist, type, type.int32, void 0, schema.enum("ProjectionType")], 16, "projectionTypeU"], [[io, io.persist, type, type.int32, void 0, schema.enum("ProjectionType")], 16, "projectionTypeV"], [[io, io.persist, type, type.string], 16, "textureName"], [[io, io.persist, type, type.string], 16, "textureResFilePath"], [[io, io.persist, type, type.boolean], 16, "isTargetMtl1"], [[io, io.persist, type, type.boolean], 16, "isTargetMtl2"], [[io, io.persist, type, type.boolean], 16, "isTargetMtl3"], [[io, io.persist, type, type.boolean], 16, "isTargetMtl4"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isTargetMtl4(this);
  }
  /** m_materialSource (MaterialSource - enum MaterialSource) [READWRITE, PERSIST, ENUM] */
  materialSource = _init_materialSource(this, 0);

  /** m_projectionTypeU (ProjectionType - enum ProjectionType) [READWRITE, PERSIST, ENUM] */
  projectionTypeU = (_init_extra_materialSource(this), _init_projectionTypeU(this, 0));

  /** m_projectionTypeV (ProjectionType - enum ProjectionType) [READWRITE, PERSIST, ENUM] */
  projectionTypeV = (_init_extra_projectionTypeU(this), _init_projectionTypeV(this, 0));

  /** m_textureName (BlueSharedString) [READWRITE, PERSIST] */
  textureName = (_init_extra_projectionTypeV(this), _init_textureName(this, ""));

  /** m_textureResFilePath (std::string) [READWRITE, PERSIST] */
  textureResFilePath = (_init_extra_textureName(this), _init_textureResFilePath(this, ""));

  /** m_isTargetMtl1 (bool) [READWRITE, PERSIST] */
  isTargetMtl1 = (_init_extra_textureResFilePath(this), _init_isTargetMtl(this, true));

  /** m_isTargetMtl2 (bool) [READWRITE, PERSIST] */
  isTargetMtl2 = (_init_extra_isTargetMtl(this), _init_isTargetMtl2(this, true));

  /** m_isTargetMtl3 (bool) [READWRITE, PERSIST] */
  isTargetMtl3 = (_init_extra_isTargetMtl2(this), _init_isTargetMtl3(this, true));

  /** m_isTargetMtl4 (bool) [READWRITE, PERSIST] */
  isTargetMtl4 = (_init_extra_isTargetMtl3(this), _init_isTargetMtl4(this, true));
  static {
    _initClass();
  }
}

export { _EveSOFDataPatternLay as EveSOFDataPatternLayer };
//# sourceMappingURL=EveSOFDataPatternLayer.js.map
