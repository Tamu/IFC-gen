
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcReal} from "./IfcReal.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccartesiantransformationoperator2d.htm
 */
export class IfcCartesianTransformationOperator2D extends IfcCartesianTransformationOperator {

    get U() : Array<IfcDirection>{throw "Derived property logic has not been implemented for U."} // derived
    set U(value : Array<IfcDirection>){super.U = value}

    constructor(localOrigin : IfcCartesianPoint) {
        super(localOrigin)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))

        return parameters.join();
    }
}