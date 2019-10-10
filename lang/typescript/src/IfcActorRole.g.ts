
import {BaseIfc} from "./BaseIfc"
import {IfcRoleEnum} from "./IfcRoleEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcactorrole.htm
 */
export class IfcActorRole extends BaseIfc {
	Role : IfcRoleEnum
	UserDefinedRole : IfcLabel // optional
	Description : IfcText // optional
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse

    constructor(role : IfcRoleEnum) {
        super()
		this.Role = role

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Role))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedRole))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join();
    }
}