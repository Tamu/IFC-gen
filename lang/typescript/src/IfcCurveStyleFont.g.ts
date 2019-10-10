
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurveStyleFontPattern} from "./IfcCurveStyleFontPattern.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccurvestylefont.htm
 */
export class IfcCurveStyleFont extends IfcPresentationItem {
	Name : IfcLabel // optional
	PatternList : Array<IfcCurveStyleFontPattern>

    constructor(patternList : Array<IfcCurveStyleFontPattern>) {
        super()
		this.PatternList = patternList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.PatternList))

        return parameters.join();
    }
}