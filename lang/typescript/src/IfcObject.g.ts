
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
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcobject.htm
 */
export abstract class IfcObject extends IfcObjectDefinition {
	ObjectType : IfcLabel // optional
	IsDeclaredBy : Array<IfcRelDefinesByObject> // inverse
	Declares : Array<IfcRelDefinesByObject> // inverse
	IsTypedBy : Array<IfcRelDefinesByType> // inverse
	IsDefinedBy : Array<IfcRelDefinesByProperties> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}