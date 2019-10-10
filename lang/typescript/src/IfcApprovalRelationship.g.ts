
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcapprovalrelationship.htm
 */
export class IfcApprovalRelationship extends IfcResourceLevelRelationship {
	RelatingApproval : IfcApproval
	RelatedApprovals : Array<IfcApproval>

    constructor(relatingApproval : IfcApproval, relatedApprovals : Array<IfcApproval>) {
        super()
		this.RelatingApproval = relatingApproval
		this.RelatedApprovals = relatedApprovals

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingApproval))
		parameters.push(BaseIfc.toStepValue(this.RelatedApprovals))

        return parameters.join();
    }
}