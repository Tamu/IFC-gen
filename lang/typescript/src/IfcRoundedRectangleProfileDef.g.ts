
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcRectangleProfileDef} from "./IfcRectangleProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcroundedrectangleprofiledef.htm
 */
export class IfcRoundedRectangleProfileDef extends IfcRectangleProfileDef {
	RoundingRadius : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, xDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, roundingRadius : IfcPositiveLengthMeasure) {
        super(profileType,xDim,yDim)
		this.RoundingRadius = roundingRadius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.XDim))
		parameters.push(BaseIfc.toStepValue(this.YDim))
		parameters.push(BaseIfc.toStepValue(this.RoundingRadius))

        return parameters.join();
    }
}