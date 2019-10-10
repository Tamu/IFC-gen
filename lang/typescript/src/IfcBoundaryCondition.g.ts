
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcboundarycondition.htm
 */
export abstract class IfcBoundaryCondition extends BaseIfc {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}