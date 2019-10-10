
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDistributionControlElement} from "./IfcDistributionControlElement.g"
import {IfcDistributionFlowElement} from "./IfcDistributionFlowElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelflowcontrolelements.htm
 */
export class IfcRelFlowControlElements extends IfcRelConnects {
	RelatedControlElements : Array<IfcDistributionControlElement>
	RelatingFlowElement : IfcDistributionFlowElement

    constructor(globalId : IfcGloballyUniqueId, relatedControlElements : Array<IfcDistributionControlElement>, relatingFlowElement : IfcDistributionFlowElement) {
        super(globalId)
		this.RelatedControlElements = relatedControlElements
		this.RelatingFlowElement = relatingFlowElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedControlElements))
		parameters.push(BaseIfc.toStepValue(this.RelatingFlowElement))

        return parameters.join();
    }
}