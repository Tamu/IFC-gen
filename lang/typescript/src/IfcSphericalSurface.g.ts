
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcElementarySurface} from "./IfcElementarySurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsphericalsurface.htm
 */
export class IfcSphericalSurface extends IfcElementarySurface {
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, radius : IfcPositiveLengthMeasure) {
        super(position)
		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))

        return parameters.join();
    }
}