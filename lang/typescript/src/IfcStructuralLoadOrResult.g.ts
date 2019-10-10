
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralloadorresult.htm
 */
export abstract class IfcStructuralLoadOrResult extends IfcStructuralLoad {

    constructor() {
        super()
    }
}