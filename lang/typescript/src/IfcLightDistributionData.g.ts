
import {BaseIfc} from "./BaseIfc"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcLuminousIntensityDistributionMeasure} from "./IfcLuminousIntensityDistributionMeasure.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifclightdistributiondata.htm
 */
export class IfcLightDistributionData extends BaseIfc {
	MainPlaneAngle : IfcPlaneAngleMeasure
	SecondaryPlaneAngle : Array<IfcPlaneAngleMeasure>
	LuminousIntensity : Array<IfcLuminousIntensityDistributionMeasure>

    constructor(mainPlaneAngle : IfcPlaneAngleMeasure, secondaryPlaneAngle : Array<IfcPlaneAngleMeasure>, luminousIntensity : Array<IfcLuminousIntensityDistributionMeasure>) {
        super()
		this.MainPlaneAngle = mainPlaneAngle
		this.SecondaryPlaneAngle = secondaryPlaneAngle
		this.LuminousIntensity = luminousIntensity

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.MainPlaneAngle))
		parameters.push(BaseIfc.toStepValue(this.SecondaryPlaneAngle))
		parameters.push(BaseIfc.toStepValue(this.LuminousIntensity))

        return parameters.join();
    }
}