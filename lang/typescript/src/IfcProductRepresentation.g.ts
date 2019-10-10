
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcproductrepresentation.htm
 */
export abstract class IfcProductRepresentation extends BaseIfc {
	Name : IfcLabel // optional
	Description : IfcText // optional
	Representations : Array<IfcRepresentation>

    constructor(representations : Array<IfcRepresentation>) {
        super()
		this.Representations = representations

    }
}