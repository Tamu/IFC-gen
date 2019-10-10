
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccartesiantransformationoperator2dnonuniform.htm
 */
export class IfcCartesianTransformationOperator2DnonUniform extends IfcCartesianTransformationOperator2D {
	Scale2 : IfcReal // optional

    get Scl2() : IfcReal{throw "Derived property logic has not been implemented for Scl2."} // derived
    set Scl2(value : IfcReal){super.Scl2 = value}

    constructor(localOrigin : IfcCartesianPoint) {
        super(localOrigin)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))
		parameters.push(BaseIfc.toStepValue(this.Scale2))

        return parameters.join();
    }
}