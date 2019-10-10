
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralconnectioncondition.htm
 */
export abstract class IfcStructuralConnectionCondition extends BaseIfc {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}