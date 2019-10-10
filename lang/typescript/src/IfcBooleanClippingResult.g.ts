
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcBooleanOperator} from "./IfcBooleanOperator.g"
import {IfcBooleanResult} from "./IfcBooleanResult.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"
import {IfcSolidModel} from "./IfcSolidModel.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcbooleanclippingresult.htm
 */
export class IfcBooleanClippingResult extends IfcBooleanResult {

    constructor(op : IfcBooleanOperator, firstOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet, secondOperand : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet) {
        super(op,firstOperand,secondOperand)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Operator))
		parameters.push(BaseIfc.toStepValue(this.FirstOperand))
		parameters.push(BaseIfc.toStepValue(this.SecondOperand))

        return parameters.join();
    }
}