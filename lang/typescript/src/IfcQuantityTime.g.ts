
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcTimeMeasure} from "./IfcTimeMeasure.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcquantitytime.htm
 */
export class IfcQuantityTime extends IfcPhysicalSimpleQuantity {
	TimeValue : IfcTimeMeasure
	Formula : IfcLabel // optional

    constructor(name : IfcLabel, timeValue : IfcTimeMeasure) {
        super(name)
		this.TimeValue = timeValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.TimeValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join();
    }
}