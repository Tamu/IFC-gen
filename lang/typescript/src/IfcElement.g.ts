
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
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelFillsElement} from "./IfcRelFillsElement.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements.g"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement.g"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.g"
import {IfcProduct} from "./IfcProduct.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcelement.htm
 */
export abstract class IfcElement extends IfcProduct {
	Tag : IfcIdentifier // optional
	FillsVoids : Array<IfcRelFillsElement> // inverse
	ConnectedTo : Array<IfcRelConnectsElements> // inverse
	IsInterferedByElements : Array<IfcRelInterferesElements> // inverse
	InterferesElements : Array<IfcRelInterferesElements> // inverse
	HasProjections : Array<IfcRelProjectsElement> // inverse
	ReferencedInStructures : Array<IfcRelReferencedInSpatialStructure> // inverse
	HasOpenings : Array<IfcRelVoidsElement> // inverse
	IsConnectionRealization : Array<IfcRelConnectsWithRealizingElements> // inverse
	ProvidesBoundaries : Array<IfcRelSpaceBoundary> // inverse
	ConnectedFrom : Array<IfcRelConnectsElements> // inverse
	ContainedInStructure : Array<IfcRelContainedInSpatialStructure> // inverse
	HasCoverings : Array<IfcRelCoversBldgElements> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}