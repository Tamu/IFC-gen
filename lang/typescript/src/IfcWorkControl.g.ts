
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
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcControl} from "./IfcControl.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcworkcontrol.htm
 */
export abstract class IfcWorkControl extends IfcControl {
	CreationDate : IfcDateTime
	Creators : Array<IfcPerson> // optional
	Purpose : IfcLabel // optional
	Duration : IfcDuration // optional
	TotalFloat : IfcDuration // optional
	StartTime : IfcDateTime
	FinishTime : IfcDateTime // optional

    constructor(globalId : IfcGloballyUniqueId, creationDate : IfcDateTime, startTime : IfcDateTime) {
        super(globalId)
		this.CreationDate = creationDate
		this.StartTime = startTime

    }
}