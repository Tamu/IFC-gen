
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelationship} from "./IfcRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcreldecomposes.htm
 */
export abstract class IfcRelDecomposes extends IfcRelationship {

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
}