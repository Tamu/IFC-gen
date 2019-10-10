
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcVector} from "./IfcVector.g"
import {IfcCurve} from "./IfcCurve.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcline.htm
 */
export class IfcLine extends IfcCurve {
	Pnt : IfcCartesianPoint
	Dir : IfcVector

    constructor(pnt : IfcCartesianPoint, dir : IfcVector) {
        super()
		this.Pnt = pnt
		this.Dir = dir

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Pnt))
		parameters.push(BaseIfc.toStepValue(this.Dir))

        return parameters.join();
    }
}