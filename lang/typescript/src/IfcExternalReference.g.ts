
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcexternalreference.htm
 */
export abstract class IfcExternalReference extends BaseIfc {
	Location : IfcURIReference // optional
	Identification : IfcIdentifier // optional
	Name : IfcLabel // optional
	ExternalReferenceForResources : Array<IfcExternalReferenceRelationship> // inverse

    constructor() {
        super()
    }
}