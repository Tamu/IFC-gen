
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcCurvatureMeasure} from "./IfcCurvatureMeasure.g"
import {IfcStructuralLoadSingleDisplacement} from "./IfcStructuralLoadSingleDisplacement.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralloadsingledisplacementdistortion.htm
 */
export class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement {
	Distortion : IfcCurvatureMeasure // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DisplacementX))
		parameters.push(BaseIfc.toStepValue(this.DisplacementY))
		parameters.push(BaseIfc.toStepValue(this.DisplacementZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRX))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRY))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRZ))
		parameters.push(BaseIfc.toStepValue(this.Distortion))

        return parameters.join();
    }
}