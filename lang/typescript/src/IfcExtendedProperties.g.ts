
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcextendedproperties.htm
 */
export abstract class IfcExtendedProperties extends IfcPropertyAbstraction {
	Name : IfcIdentifier // optional
	Description : IfcText // optional
	Properties : Array<IfcProperty>

    constructor(properties : Array<IfcProperty>) {
        super()
		this.Properties = properties

    }
}