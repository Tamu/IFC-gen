
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctexturevertex.htm
 */
export class IfcTextureVertex extends IfcPresentationItem {
	Coordinates : Array<IfcParameterValue>

    constructor(coordinates : Array<IfcParameterValue>) {
        super()
		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Coordinates))

        return parameters.join();
    }
}