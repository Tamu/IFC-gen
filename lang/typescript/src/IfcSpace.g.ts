
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
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelServicesBuildings} from "./IfcRelServicesBuildings.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcElementCompositionEnum} from "./IfcElementCompositionEnum.g"
import {IfcSpaceTypeEnum} from "./IfcSpaceTypeEnum.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcRelCoversSpaces} from "./IfcRelCoversSpaces.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcSpatialStructureElement} from "./IfcSpatialStructureElement.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcspace.htm
 */
export class IfcSpace extends IfcSpatialStructureElement {
	PredefinedType : IfcSpaceTypeEnum // optional
	ElevationWithFlooring : IfcLengthMeasure // optional
	HasCoverings : Array<IfcRelCoversSpaces> // inverse
	BoundedBy : Array<IfcRelSpaceBoundary> // inverse

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
		parameters.push(BaseIfc.toStepValue(this.ObjectPlacement))
		parameters.push(BaseIfc.toStepValue(this.Representation))
		parameters.push(BaseIfc.toStepValue(this.LongName))
		parameters.push(BaseIfc.toStepValue(this.CompositionType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.ElevationWithFlooring))

        return parameters.join();
    }
}