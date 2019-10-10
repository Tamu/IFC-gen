
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcLoop} from "./IfcLoop.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpolyloop.htm
 */
export class IfcPolyLoop extends IfcLoop {
	Polygon : Array<IfcCartesianPoint>

    constructor(polygon : Array<IfcCartesianPoint>) {
        super()
		this.Polygon = polygon

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Polygon))

        return parameters.join();
    }
}