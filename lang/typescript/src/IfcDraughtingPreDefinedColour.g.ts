
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcdraughtingpredefinedcolour.htm
 */
export class IfcDraughtingPreDefinedColour extends IfcPreDefinedColour {

    constructor(name : IfcLabel) {
        super(name)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join();
    }
}