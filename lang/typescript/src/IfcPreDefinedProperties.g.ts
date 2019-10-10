
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpredefinedproperties.htm
 */
export abstract class IfcPreDefinedProperties extends IfcPropertyAbstraction {

    constructor() {
        super()
    }
}