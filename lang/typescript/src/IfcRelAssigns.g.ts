
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcRelationship} from "./IfcRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelassigns.htm
 */
export abstract class IfcRelAssigns extends IfcRelationship {
	RelatedObjects : Array<IfcObjectDefinition>
	RelatedObjectsType : IfcObjectTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>) {
        super(globalId)
		this.RelatedObjects = relatedObjects

    }
}