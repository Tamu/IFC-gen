
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcLogical} from "./IfcLogical.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcoffsetcurve2d.htm
 */
export class IfcOffsetCurve2D extends IfcCurve {
	BasisCurve : IfcCurve
	Distance : IfcLengthMeasure
	SelfIntersect : IfcLogical

    constructor(basisCurve : IfcCurve, distance : IfcLengthMeasure, selfIntersect : IfcLogical) {
        super()
		this.BasisCurve = basisCurve
		this.Distance = distance
		this.SelfIntersect = selfIntersect

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Distance))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join();
    }
}