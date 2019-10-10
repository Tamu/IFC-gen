
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcDoorStyleOperationEnum} from "./IfcDoorStyleOperationEnum.g"
import {IfcDoorStyleConstructionEnum} from "./IfcDoorStyleConstructionEnum.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcTypeProduct} from "./IfcTypeProduct.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcdoorstyle.htm
 */
export class IfcDoorStyle extends IfcTypeProduct {
	OperationType : IfcDoorStyleOperationEnum
	ConstructionType : IfcDoorStyleConstructionEnum
	ParameterTakesPrecedence : IfcBoolean
	Sizeable : IfcBoolean

    constructor(globalId : IfcGloballyUniqueId, operationType : IfcDoorStyleOperationEnum, constructionType : IfcDoorStyleConstructionEnum, parameterTakesPrecedence : IfcBoolean, sizeable : IfcBoolean) {
        super(globalId)
		this.OperationType = operationType
		this.ConstructionType = constructionType
		this.ParameterTakesPrecedence = parameterTakesPrecedence
		this.Sizeable = sizeable

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.RepresentationMaps))
		parameters.push(BaseIfc.toStepValue(this.Tag))
		parameters.push(BaseIfc.toStepValue(this.OperationType))
		parameters.push(BaseIfc.toStepValue(this.ConstructionType))
		parameters.push(BaseIfc.toStepValue(this.ParameterTakesPrecedence))
		parameters.push(BaseIfc.toStepValue(this.Sizeable))

        return parameters.join();
    }
}