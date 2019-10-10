
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcProperty} from "./IfcProperty.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccomplexproperty.htm
 */
export class IfcComplexProperty extends IfcProperty {
	UsageName : IfcIdentifier
	HasProperties : Array<IfcProperty>

    constructor(name : IfcIdentifier, usageName : IfcIdentifier, hasProperties : Array<IfcProperty>) {
        super(name)
		this.UsageName = usageName
		this.HasProperties = hasProperties

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UsageName))
		parameters.push(BaseIfc.toStepValue(this.HasProperties))

        return parameters.join();
    }
}