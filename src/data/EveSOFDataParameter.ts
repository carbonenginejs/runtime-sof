// Ported from CarbonEngine (MIT, © 2026 CCP Games) — https://github.com/carbonengine/trinity
//   trinity/Eve/SpaceObjectFactory/EveSOFData.h (EveSOFDataParameter)
// Carbon parent IRoot is Blue ref-counting infrastructure, not a domain base, so per the
// Runtime Port Base-Class Rule this class extends nothing (schema/registry glue lives in core-types).
import { type } from "@carbonenginejs/core-types/schema";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import type { Vec4 } from "@carbonenginejs/core-math/types";

/** A simple named shader parameter (Vector4 value). */
@type.define({ className: "EveSOFDataParameter", family: "sof" })
export class EveSOFDataParameter {
  /** m_name (BlueSharedString) */
  @type.string
  name = "";

  /** m_value (Vector4) */
  @type.vec4
  value: Vec4 = vec4.create();
}
