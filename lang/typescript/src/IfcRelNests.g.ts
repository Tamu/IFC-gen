
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcRelDecomposes} from "./IfcRelDecomposes.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelnests.htm
 */
export class IfcRelNests extends IfcRelDecomposes {
	RelatingObject : IfcObjectDefinition
	RelatedObjects : Array<IfcObjectDefinition>

    constructor(globalId : IfcGloballyUniqueId, relatingObject : IfcObjectDefinition, relatedObjects : Array<IfcObjectDefinition>) {
        super(globalId)
		this.RelatingObject = relatingObject
		this.RelatedObjects = relatedObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingObject))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))

        return parameters.join();
    }
}