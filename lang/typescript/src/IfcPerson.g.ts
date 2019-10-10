
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAddress} from "./IfcAddress.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcperson.htm
 */
export class IfcPerson extends BaseIfc {
	Identification : IfcIdentifier // optional
	FamilyName : IfcLabel // optional
	GivenName : IfcLabel // optional
	MiddleNames : Array<IfcLabel> // optional
	PrefixTitles : Array<IfcLabel> // optional
	SuffixTitles : Array<IfcLabel> // optional
	Roles : Array<IfcActorRole> // optional
	Addresses : Array<IfcAddress> // optional
	EngagedIn : Array<IfcPersonAndOrganization> // inverse

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.FamilyName))
		parameters.push(BaseIfc.toStepValue(this.GivenName))
		parameters.push(BaseIfc.toStepValue(this.MiddleNames))
		parameters.push(BaseIfc.toStepValue(this.PrefixTitles))
		parameters.push(BaseIfc.toStepValue(this.SuffixTitles))
		parameters.push(BaseIfc.toStepValue(this.Roles))
		parameters.push(BaseIfc.toStepValue(this.Addresses))

        return parameters.join();
    }
}