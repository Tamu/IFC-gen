
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcschedulingtime.htm
 */
export abstract class IfcSchedulingTime extends BaseIfc {
	Name : IfcLabel // optional
	DataOrigin : IfcDataOriginEnum // optional
	UserDefinedDataOrigin : IfcLabel // optional

    constructor() {
        super()
    }
}