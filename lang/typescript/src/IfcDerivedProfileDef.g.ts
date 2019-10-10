
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcderivedprofiledef.htm
 */
export class IfcDerivedProfileDef extends IfcProfileDef {
	ParentProfile : IfcProfileDef
	Operator : IfcCartesianTransformationOperator2D
	Label : IfcLabel // optional

    constructor(profileType : IfcProfileTypeEnum, parentProfile : IfcProfileDef, op : IfcCartesianTransformationOperator2D) {
        super(profileType)
		this.ParentProfile = parentProfile
		this.Operator = op

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.ParentProfile))
		parameters.push(BaseIfc.toStepValue(this.Operator))
		parameters.push(BaseIfc.toStepValue(this.Label))

        return parameters.join();
    }
}