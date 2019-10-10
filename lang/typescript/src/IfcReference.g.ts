
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcInteger} from "./IfcInteger.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcreference.htm
 */
export class IfcReference extends BaseIfc {
	TypeIdentifier : IfcIdentifier // optional
	AttributeIdentifier : IfcIdentifier // optional
	InstanceName : IfcLabel // optional
	ListPositions : Array<IfcInteger> // optional
	InnerReference : IfcReference // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.TypeIdentifier))
		parameters.push(BaseIfc.toStepValue(this.AttributeIdentifier))
		parameters.push(BaseIfc.toStepValue(this.InstanceName))
		parameters.push(BaseIfc.toStepValue(this.ListPositions))
		parameters.push(BaseIfc.toStepValue(this.InnerReference))

        return parameters.join();
    }
}