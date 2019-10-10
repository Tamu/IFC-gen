
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
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"
import {IfcStructuralCurveMemberTypeEnum} from "./IfcStructuralCurveMemberTypeEnum.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcStructuralMember} from "./IfcStructuralMember.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralcurvemember.htm
 */
export class IfcStructuralCurveMember extends IfcStructuralMember {
	PredefinedType : IfcStructuralCurveMemberTypeEnum
	Axis : IfcDirection

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcStructuralCurveMemberTypeEnum, axis : IfcDirection) {
        super(globalId)
		this.PredefinedType = predefinedType
		this.Axis = axis

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
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.Axis))

        return parameters.join();
    }
}