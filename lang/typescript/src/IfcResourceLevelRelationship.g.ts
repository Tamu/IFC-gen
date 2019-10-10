
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcresourcelevelrelationship.htm
 */
export abstract class IfcResourceLevelRelationship extends BaseIfc {
	Name : IfcLabel // optional
	Description : IfcText // optional

    constructor() {
        super()
    }
}