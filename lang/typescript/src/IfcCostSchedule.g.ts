
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl.g"
import {IfcCostScheduleTypeEnum} from "./IfcCostScheduleTypeEnum.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcControl} from "./IfcControl.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccostschedule.htm
 */
export class IfcCostSchedule extends IfcControl {
	PredefinedType : IfcCostScheduleTypeEnum // optional
	Status : IfcLabel // optional
	SubmittedOn : IfcDateTime // optional
	UpdateDate : IfcDateTime // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.SubmittedOn))
		parameters.push(BaseIfc.toStepValue(this.UpdateDate))

        return parameters.join();
    }
}