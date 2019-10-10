
import {BaseIfc} from "./BaseIfc"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctextstylefordefinedfont.htm
 */
export class IfcTextStyleForDefinedFont extends IfcPresentationItem {
	Colour : IfcColourSpecification|IfcPreDefinedColour
	BackgroundColour : IfcColourSpecification|IfcPreDefinedColour // optional

    constructor(colour : IfcColourSpecification|IfcPreDefinedColour) {
        super()
		this.Colour = colour

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Colour))
		parameters.push(BaseIfc.toStepValue(this.BackgroundColour))

        return parameters.join();
    }
}