
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertyabstraction.htm
 */
export abstract class IfcPropertyAbstraction extends BaseIfc {
	HasExternalReferences : Array<IfcExternalReferenceRelationship> // inverse

    constructor() {
        super()
    }
}