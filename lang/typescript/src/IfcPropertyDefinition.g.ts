
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRoot} from "./IfcRoot.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertydefinition.htm
 */
export abstract class IfcPropertyDefinition extends IfcRoot {
	HasContext : Array<IfcRelDeclares> // inverse
	HasAssociations : Array<IfcRelAssociates> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}