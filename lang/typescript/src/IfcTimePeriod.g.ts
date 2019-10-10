
import {BaseIfc} from "./BaseIfc"
import {IfcTime} from "./IfcTime.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctimeperiod.htm
 */
export class IfcTimePeriod extends BaseIfc {
	StartTime : IfcTime
	EndTime : IfcTime

    constructor(startTime : IfcTime, endTime : IfcTime) {
        super()
		this.StartTime = startTime
		this.EndTime = endTime

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.StartTime))
		parameters.push(BaseIfc.toStepValue(this.EndTime))

        return parameters.join();
    }
}