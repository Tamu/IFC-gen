
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCircleProfileDef} from "./IfcCircleProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccirclehollowprofiledef.htm
 */
export class IfcCircleHollowProfileDef extends IfcCircleProfileDef {
	WallThickness : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, radius : IfcPositiveLengthMeasure, wallThickness : IfcPositiveLengthMeasure) {
        super(profileType,radius)
		this.WallThickness = wallThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.WallThickness))

        return parameters.join();
    }
}