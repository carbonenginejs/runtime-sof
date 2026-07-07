// Ported from CarbonEngine (MIT, © 2026 CCP Games) — https://github.com/carbonengine/trinity
//   trinity/Eve/SpaceObjectFactory/EveSOFData.h (EveSOFDataTexture)
import { type } from "@carbonenginejs/core-types/schema";

/** A named texture resource reference. */
@type.define({ className: "EveSOFDataTexture", family: "sof" })
export class EveSOFDataTexture {
  /** m_resFilePath (std::string — a resource path) */
  @type.path
  resFilePath = "";

  /** m_name (BlueSharedString) */
  @type.string
  name = "";
}
