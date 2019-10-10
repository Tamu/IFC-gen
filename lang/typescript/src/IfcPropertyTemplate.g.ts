
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcComplexPropertyTemplate} from "./IfcComplexPropertyTemplate.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertytemplate.htm
 */
export abstract class IfcPropertyTemplate extends IfcPropertyTemplateDefinition {
	PartOfComplexTemplate : Array<IfcComplexPropertyTemplate> // inverse
	PartOfPsetTemplate : Array<IfcPropertySetTemplate> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}