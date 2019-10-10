
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConstraint} from "./IfcConstraint.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcContextDependentUnit} from "./IfcContextDependentUnit.g"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcresourceconstraintrelationship.htm
 */
export class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
	RelatingConstraint : IfcConstraint
	RelatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>

    constructor(relatingConstraint : IfcConstraint, relatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>) {
        super()
		this.RelatingConstraint = relatingConstraint
		this.RelatedResourceObjects = relatedResourceObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingConstraint))
		parameters.push(BaseIfc.toStepValue(this.RelatedResourceObjects))

        return parameters.join();
    }
}