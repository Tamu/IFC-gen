
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpolyline.htm
 */
export class IfcPolyline extends IfcBoundedCurve {
	Points : Array<IfcCartesianPoint>

    constructor(points : Array<IfcCartesianPoint>) {
        super()
		this.Points = points

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Points))

        return parameters.join();
    }
}