
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPlane} from "./IfcPlane.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccurveboundedplane.htm
 */
export class IfcCurveBoundedPlane extends IfcBoundedSurface {
	BasisSurface : IfcPlane
	OuterBoundary : IfcCurve
	InnerBoundaries : Array<IfcCurve>

    constructor(basisSurface : IfcPlane, outerBoundary : IfcCurve, innerBoundaries : Array<IfcCurve>) {
        super()
		this.BasisSurface = basisSurface
		this.OuterBoundary = outerBoundary
		this.InnerBoundaries = innerBoundaries

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.OuterBoundary))
		parameters.push(BaseIfc.toStepValue(this.InnerBoundaries))

        return parameters.join();
    }
}