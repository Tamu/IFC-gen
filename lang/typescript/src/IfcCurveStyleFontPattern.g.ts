
import {BaseIfc} from "./BaseIfc"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccurvestylefontpattern.htm
 */
export class IfcCurveStyleFontPattern extends IfcPresentationItem {
	VisibleSegmentLength : IfcLengthMeasure
	InvisibleSegmentLength : IfcPositiveLengthMeasure

    constructor(visibleSegmentLength : IfcLengthMeasure, invisibleSegmentLength : IfcPositiveLengthMeasure) {
        super()
		this.VisibleSegmentLength = visibleSegmentLength
		this.InvisibleSegmentLength = invisibleSegmentLength

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.VisibleSegmentLength))
		parameters.push(BaseIfc.toStepValue(this.InvisibleSegmentLength))

        return parameters.join();
    }
}