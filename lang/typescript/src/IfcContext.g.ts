
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
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcUnitAssignment} from "./IfcUnitAssignment.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccontext.htm
 */
export abstract class IfcContext extends IfcObjectDefinition {
	ObjectType : IfcLabel // optional
	LongName : IfcLabel // optional
	Phase : IfcLabel // optional
	RepresentationContexts : Array<IfcRepresentationContext> // optional
	UnitsInContext : IfcUnitAssignment // optional
	IsDefinedBy : Array<IfcRelDefinesByProperties> // inverse
	Declares : Array<IfcRelDeclares> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}