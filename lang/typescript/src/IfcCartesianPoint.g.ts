
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPoint} from "./IfcPoint.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccartesianpoint.htm
 */
export class IfcCartesianPoint extends IfcPoint {
	Coordinates : Array<IfcLengthMeasure>

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(coordinates : Array<IfcLengthMeasure>) {
        super()
		this.Coordinates = coordinates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Coordinates))

        return parameters.join();
    }
}