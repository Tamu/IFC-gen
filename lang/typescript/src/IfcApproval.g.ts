
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcRelAssociatesApproval} from "./IfcRelAssociatesApproval.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcApprovalRelationship} from "./IfcApprovalRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcapproval.htm
 */
export class IfcApproval extends BaseIfc {
	Identifier : IfcIdentifier // optional
	Name : IfcLabel // optional
	Description : IfcText // optional
	TimeOfApproval : IfcDateTime // optional
	Status : IfcLabel // optional
	Level : IfcLabel // optional
	Qualifier : IfcText // optional
	RequestingApproval : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	GivingApproval : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship> // inverse
	ApprovedObjects : Array<IfcRelAssociatesApproval> // inverse
	ApprovedResources : Array<IfcResourceApprovalRelationship> // inverse
	IsRelatedWith : Array<IfcApprovalRelationship> // inverse
	Relates : Array<IfcApprovalRelationship> // inverse

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Identifier))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TimeOfApproval))
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.Level))
		parameters.push(BaseIfc.toStepValue(this.Qualifier))
		parameters.push(BaseIfc.toStepValue(this.RequestingApproval))
		parameters.push(BaseIfc.toStepValue(this.GivingApproval))

        return parameters.join();
    }
}