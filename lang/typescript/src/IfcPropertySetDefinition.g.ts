
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertysetdefinition.htm
 */
export abstract class IfcPropertySetDefinition extends IfcPropertyDefinition {
	DefinesType : Array<IfcTypeObject> // inverse
	IsDefinedBy : Array<IfcRelDefinesByTemplate> // inverse
	DefinesOccurrence : Array<IfcRelDefinesByProperties> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}