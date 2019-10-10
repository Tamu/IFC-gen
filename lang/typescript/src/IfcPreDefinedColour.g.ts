
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPreDefinedItem} from "./IfcPreDefinedItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpredefinedcolour.htm
 */
export abstract class IfcPreDefinedColour extends IfcPreDefinedItem {

    constructor(name : IfcLabel) {
        super(name)
    }
}