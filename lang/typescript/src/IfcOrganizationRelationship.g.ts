
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcorganizationrelationship.htm
 */
export class IfcOrganizationRelationship extends IfcResourceLevelRelationship {
	RelatingOrganization : IfcOrganization
	RelatedOrganizations : Array<IfcOrganization>

    constructor(relatingOrganization : IfcOrganization, relatedOrganizations : Array<IfcOrganization>) {
        super()
		this.RelatingOrganization = relatingOrganization
		this.RelatedOrganizations = relatedOrganizations

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingOrganization))
		parameters.push(BaseIfc.toStepValue(this.RelatedOrganizations))

        return parameters.join();
    }
}