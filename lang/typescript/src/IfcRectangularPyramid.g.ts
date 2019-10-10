
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrectangularpyramid.htm
 */
export class IfcRectangularPyramid extends IfcCsgPrimitive3D {
	XLength : IfcPositiveLengthMeasure
	YLength : IfcPositiveLengthMeasure
	Height : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, xLength : IfcPositiveLengthMeasure, yLength : IfcPositiveLengthMeasure, height : IfcPositiveLengthMeasure) {
        super(position)
		this.XLength = xLength
		this.YLength = yLength
		this.Height = height

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.XLength))
		parameters.push(BaseIfc.toStepValue(this.YLength))
		parameters.push(BaseIfc.toStepValue(this.Height))

        return parameters.join();
    }
}