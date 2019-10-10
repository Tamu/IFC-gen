
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcElementarySurface} from "./IfcElementarySurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcplane.htm
 */
export class IfcPlane extends IfcElementarySurface {

    constructor(position : IfcAxis2Placement3D) {
        super(position)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Position))

        return parameters.join();
    }
}