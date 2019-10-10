
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcTextStyleForDefinedFont} from "./IfcTextStyleForDefinedFont.g"
import {IfcTextStyleTextModel} from "./IfcTextStyleTextModel.g"
import {IfcExternallyDefinedTextFont} from "./IfcExternallyDefinedTextFont.g"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctextstyle.htm
 */
export class IfcTextStyle extends IfcPresentationStyle {
	TextCharacterAppearance : IfcTextStyleForDefinedFont // optional
	TextStyle : IfcTextStyleTextModel // optional
	TextFontStyle : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
	ModelOrDraughting : IfcBoolean // optional

    constructor(textFontStyle : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont) {
        super()
		this.TextFontStyle = textFontStyle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TextCharacterAppearance))
		parameters.push(BaseIfc.toStepValue(this.TextStyle))
		parameters.push(BaseIfc.toStepValue(this.TextFontStyle))
		parameters.push(BaseIfc.toStepValue(this.ModelOrDraughting))

        return parameters.join();
    }
}