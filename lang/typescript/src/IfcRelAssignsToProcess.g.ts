
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcProcess} from "./IfcProcess.g"
import {IfcTypeProcess} from "./IfcTypeProcess.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelassignstoprocess.htm
 */
export class IfcRelAssignsToProcess extends IfcRelAssigns {
	RelatingProcess : IfcProcess|IfcTypeProcess
	QuantityInProcess : IfcMeasureWithUnit // optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingProcess : IfcProcess|IfcTypeProcess) {
        super(globalId,relatedObjects)
		this.RelatingProcess = relatingProcess

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingProcess))
		parameters.push(BaseIfc.toStepValue(this.QuantityInProcess))

        return parameters.join();
    }
}