
import {BaseIfc} from "./BaseIfc"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcIdentifier} from "./IfcIdentifier.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcapplication.htm
 */
export class IfcApplication extends BaseIfc {
	ApplicationDeveloper : IfcOrganization
	Version : IfcLabel
	ApplicationFullName : IfcLabel
	ApplicationIdentifier : IfcIdentifier

    constructor(applicationDeveloper : IfcOrganization, version : IfcLabel, applicationFullName : IfcLabel, applicationIdentifier : IfcIdentifier) {
        super()
		this.ApplicationDeveloper = applicationDeveloper
		this.Version = version
		this.ApplicationFullName = applicationFullName
		this.ApplicationIdentifier = applicationIdentifier

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ApplicationDeveloper))
		parameters.push(BaseIfc.toStepValue(this.Version))
		parameters.push(BaseIfc.toStepValue(this.ApplicationFullName))
		parameters.push(BaseIfc.toStepValue(this.ApplicationIdentifier))

        return parameters.join();
    }
}