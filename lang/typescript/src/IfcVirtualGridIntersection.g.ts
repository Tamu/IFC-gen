
import {BaseIfc} from "./BaseIfc"
import {IfcGridAxis} from "./IfcGridAxis.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcvirtualgridintersection.htm
 */
export class IfcVirtualGridIntersection extends BaseIfc {
	IntersectingAxes : Array<IfcGridAxis>
	OffsetDistances : Array<IfcLengthMeasure>

    constructor(intersectingAxes : Array<IfcGridAxis>, offsetDistances : Array<IfcLengthMeasure>) {
        super()
		this.IntersectingAxes = intersectingAxes
		this.OffsetDistances = offsetDistances

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.IntersectingAxes))
		parameters.push(BaseIfc.toStepValue(this.OffsetDistances))

        return parameters.join();
    }
}