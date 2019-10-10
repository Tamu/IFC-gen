
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPlacement} from "./IfcPlacement.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcaxis1placement.htm
 */
export class IfcAxis1Placement extends IfcPlacement {
	Axis : IfcDirection // optional

    get Z() : IfcDirection{throw "Derived property logic has not been implemented for Z."} // derived
    set Z(value : IfcDirection){super.Z = value}

    constructor(location : IfcCartesianPoint) {
        super(location)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Axis))

        return parameters.join();
    }
}