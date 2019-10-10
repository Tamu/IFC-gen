
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcushapeprofiledef.htm
 */
export class IfcUShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	FlangeWidth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	FlangeThickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure // optional
	EdgeRadius : IfcNonNegativeLengthMeasure // optional
	FlangeSlope : IfcPlaneAngleMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, flangeWidth : IfcPositiveLengthMeasure, webThickness : IfcPositiveLengthMeasure, flangeThickness : IfcPositiveLengthMeasure) {
        super(profileType)
		this.Depth = depth
		this.FlangeWidth = flangeWidth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.FlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.WebThickness))
		parameters.push(BaseIfc.toStepValue(this.FlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.FilletRadius))
		parameters.push(BaseIfc.toStepValue(this.EdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.FlangeSlope))

        return parameters.join();
    }
}