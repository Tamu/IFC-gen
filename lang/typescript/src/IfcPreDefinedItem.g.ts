
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpredefineditem.htm
 */
export abstract class IfcPreDefinedItem extends IfcPresentationItem {
	Name : IfcLabel

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
}