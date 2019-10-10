
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcroot.htm
 */
export abstract class IfcRoot extends BaseIfc {
	GlobalId : IfcGloballyUniqueId
	OwnerHistory : IfcOwnerHistory // optional
	Name : IfcLabel // optional
	Description : IfcText // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super()
		this.GlobalId = globalId

    }
}