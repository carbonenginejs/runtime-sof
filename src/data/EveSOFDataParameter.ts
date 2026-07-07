// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObjectFactory\EveSOFData.h
//         BLUE_CLASS( EveSOFDataParameter ) : public IRoot
// Carbon parent IRoot is Blue ref-counting infrastructure, not a domain base, so per the
// Runtime Port Base-Class Rule this class extends nothing (schema/registry glue lives in core-types).
import { type } from "@carbonenginejs/core-types/schema";

/** A simple named shader parameter (Vector4 value). */
@type.define({ className: "EveSOFDataParameter", family: "sof" })
export class EveSOFDataParameter {
  /** m_name (BlueSharedString) */
  @type.string
  name = "";

  /** m_value (Vector4) */
  @type.vec4
  value: number[] = [0, 0, 0, 0];
}
