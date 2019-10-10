
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelassociatesapproval.htm
 */
export class IfcRelAssociatesApproval extends IfcRelAssociates {
	RelatingApproval : IfcApproval

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingApproval : IfcApproval) {
        super(globalId,relatedObjects)
		this.RelatingApproval = relatingApproval

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingApproval))

        return parameters.join();
    }
}