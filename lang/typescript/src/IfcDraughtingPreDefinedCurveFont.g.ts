
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcdraughtingpredefinedcurvefont.htm
 */
export class IfcDraughtingPreDefinedCurveFont extends IfcPreDefinedCurveFont {

    constructor(name : IfcLabel) {
        super(name)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join();
    }
}