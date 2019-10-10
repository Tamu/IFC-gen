
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoadOrResult} from "./IfcStructuralLoadOrResult.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralloadstatic.htm
 */
export abstract class IfcStructuralLoadStatic extends IfcStructuralLoadOrResult {

    constructor() {
        super()
    }
}