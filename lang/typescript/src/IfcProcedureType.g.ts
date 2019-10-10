
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
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess.g"
import {IfcProcedureTypeEnum} from "./IfcProcedureTypeEnum.g"
import {IfcTypeProcess} from "./IfcTypeProcess.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcproceduretype.htm
 */
export class IfcProcedureType extends IfcTypeProcess {
	PredefinedType : IfcProcedureTypeEnum

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcProcedureTypeEnum) {
        super(globalId)
		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.LongDescription))
		parameters.push(BaseIfc.toStepValue(this.ProcessType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join();
    }
}