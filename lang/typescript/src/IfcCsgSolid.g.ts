
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcBooleanResult} from "./IfcBooleanResult.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccsgsolid.htm
 */
export class IfcCsgSolid extends IfcSolidModel {
	TreeRootExpression : IfcBooleanResult|IfcCsgPrimitive3D

    constructor(treeRootExpression : IfcBooleanResult|IfcCsgPrimitive3D) {
        super()
		this.TreeRootExpression = treeRootExpression

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.TreeRootExpression))

        return parameters.join();
    }
}