
import {BaseIfc} from "./BaseIfc"
import {IfcCurveStyle} from "./IfcCurveStyle.g"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle.g"
import {IfcNullStyle} from "./IfcNullStyle.g"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle.g"
import {IfcTextStyle} from "./IfcTextStyle.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpresentationstyleassignment.htm
 */
export class IfcPresentationStyleAssignment extends BaseIfc {
	Styles : Array<IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle>

    constructor(styles : Array<IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle>) {
        super()
		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Styles))

        return parameters.join();
    }
}