
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertytemplatedefinition.htm
 */
export abstract class IfcPropertyTemplateDefinition extends IfcPropertyDefinition {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}