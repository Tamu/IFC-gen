
import {BaseIfc} from "./BaseIfc"
import {IfcLightDistributionCurveEnum} from "./IfcLightDistributionCurveEnum.g"
import {IfcLightDistributionData} from "./IfcLightDistributionData.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifclightintensitydistribution.htm
 */
export class IfcLightIntensityDistribution extends BaseIfc {
	LightDistributionCurve : IfcLightDistributionCurveEnum
	DistributionData : Array<IfcLightDistributionData>

    constructor(lightDistributionCurve : IfcLightDistributionCurveEnum, distributionData : Array<IfcLightDistributionData>) {
        super()
		this.LightDistributionCurve = lightDistributionCurve
		this.DistributionData = distributionData

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.LightDistributionCurve))
		parameters.push(BaseIfc.toStepValue(this.DistributionData))

        return parameters.join();
    }
}