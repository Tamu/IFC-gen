
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralload.htm
 */
export abstract class IfcStructuralLoad extends BaseIfc {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}