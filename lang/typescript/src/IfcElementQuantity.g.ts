
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcQuantitySet} from "./IfcQuantitySet.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcelementquantity.htm
 */
export class IfcElementQuantity extends IfcQuantitySet {
	MethodOfMeasurement : IfcLabel // optional
	Quantities : Array<IfcPhysicalQuantity>

    constructor(globalId : IfcGloballyUniqueId, quantities : Array<IfcPhysicalQuantity>) {
        super(globalId)
		this.Quantities = quantities

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.MethodOfMeasurement))
		parameters.push(BaseIfc.toStepValue(this.Quantities))

        return parameters.join();
    }
}