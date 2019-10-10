
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccolourspecification.htm
 */
export abstract class IfcColourSpecification extends IfcPresentationItem {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}