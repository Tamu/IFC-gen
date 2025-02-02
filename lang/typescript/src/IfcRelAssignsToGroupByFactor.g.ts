
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcGroup} from "./IfcGroup.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelassignstogroupbyfactor.htm
 */
export class IfcRelAssignsToGroupByFactor extends IfcRelAssignsToGroup {
	Factor : IfcRatioMeasure

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingGroup : IfcGroup, factor : IfcRatioMeasure) {
        super(globalId,relatedObjects,relatingGroup)
		this.Factor = factor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingGroup))
		parameters.push(BaseIfc.toStepValue(this.Factor))

        return parameters.join();
    }
}