
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcColourSpecification} from "./IfcColourSpecification.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccolourrgb.htm
 */
export class IfcColourRgb extends IfcColourSpecification {
	Red : IfcNormalisedRatioMeasure
	Green : IfcNormalisedRatioMeasure
	Blue : IfcNormalisedRatioMeasure

    constructor(red : IfcNormalisedRatioMeasure, green : IfcNormalisedRatioMeasure, blue : IfcNormalisedRatioMeasure) {
        super()
		this.Red = red
		this.Green = green
		this.Blue = blue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Red))
		parameters.push(BaseIfc.toStepValue(this.Green))
		parameters.push(BaseIfc.toStepValue(this.Blue))

        return parameters.join();
    }
}