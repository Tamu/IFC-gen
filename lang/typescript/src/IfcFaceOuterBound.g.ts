
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLoop} from "./IfcLoop.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcFaceBound} from "./IfcFaceBound.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcfaceouterbound.htm
 */
export class IfcFaceOuterBound extends IfcFaceBound {

    constructor(bound : IfcLoop, orientation : IfcBoolean) {
        super(bound,orientation)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Bound))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join();
    }
}