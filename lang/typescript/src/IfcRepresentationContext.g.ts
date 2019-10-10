
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrepresentationcontext.htm
 */
export abstract class IfcRepresentationContext extends BaseIfc {
	ContextIdentifier : IfcLabel // optional
	ContextType : IfcLabel // optional
	RepresentationsInContext : Array<IfcRepresentation> // inverse

    constructor() {
        super()
    }
}