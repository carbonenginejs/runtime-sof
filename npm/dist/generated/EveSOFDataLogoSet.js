import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_Primary, _init_extra_Primary, _init_Secondary, _init_extra_Secondary, _init_Tertiary, _init_extra_Tertiary, _init_Marking_, _init_extra_Marking_, _init_Marking_2, _init_extra_Marking_2;

/** EveSOFDataLogoSet (eve) - generated from schema shapeHash 1a77225e.... */
let _EveSOFDataLogoSet;
new class extends _identity {
  static [class EveSOFDataLogoSet extends CjsModel {
    static {
      ({
        e: [_init_Primary, _init_extra_Primary, _init_Secondary, _init_extra_Secondary, _init_Tertiary, _init_extra_Tertiary, _init_Marking_, _init_extra_Marking_, _init_Marking_2, _init_extra_Marking_2],
        c: [_EveSOFDataLogoSet, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSOFDataLogoSet",
        family: "eve"
      })], [[[io, io.persist, void 0, type.objectRef("EveSOFDataLogo")], 16, "Primary"], [[io, io.persist, void 0, type.objectRef("EveSOFDataLogo")], 16, "Secondary"], [[io, io.persist, void 0, type.objectRef("EveSOFDataLogo")], 16, "Tertiary"], [[io, io.persist, void 0, type.objectRef("EveSOFDataLogo")], 16, "Marking_01"], [[io, io.persist, void 0, type.objectRef("EveSOFDataLogo")], 16, "Marking_02"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_Marking_2(this);
    }
    /** m_logos[TYPE_PRIMARY] (EveSOFDataLogoPtr) [READWRITE, PERSIST] */
    Primary = _init_Primary(this, null);

    /** m_logos[TYPE_SECONDARY] (EveSOFDataLogoPtr) [READWRITE, PERSIST] */
    Secondary = (_init_extra_Primary(this), _init_Secondary(this, null));

    /** m_logos[TYPE_TERTIARY] (EveSOFDataLogoPtr) [READWRITE, PERSIST] */
    Tertiary = (_init_extra_Secondary(this), _init_Tertiary(this, null));

    /** m_logos[TYPE_MARKING_01] (EveSOFDataLogoPtr) [READWRITE, PERSIST] */
    Marking_01 = (_init_extra_Tertiary(this), _init_Marking_(this, null));

    /** m_logos[TYPE_MARKING_02] (EveSOFDataLogoPtr) [READWRITE, PERSIST] */
    Marking_02 = (_init_extra_Marking_(this), _init_Marking_2(this, null));
  }];
  LogoType = Object.freeze({
    TYPE_PRIMARY: 0,
    TYPE_SECONDARY: 1,
    TYPE_TERTIARY: 2,
    TYPE_MARKING_01: 3,
    TYPE_MARKING_02: 4,
    TYPE_MAX: 5
  });
  constructor() {
    super(_EveSOFDataLogoSet), _initClass();
  }
}();

export { _EveSOFDataLogoSet as EveSOFDataLogoSet };
//# sourceMappingURL=EveSOFDataLogoSet.js.map
