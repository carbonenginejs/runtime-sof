// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
import { type } from "@carbonenginejs/core-types/schema";
import { CjsModel } from "@carbonenginejs/core-types/model";

@type.define({ className: "EveSOFDataBlink", family: "eve" })
export class EveSOFDataBlink extends CjsModel
{

  /** Carbon currently exposes an empty SOF blink value shape. */
  IsEmpty()
  {
    return true;
  }

}
