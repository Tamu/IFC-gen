
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcarbitraryclosedprofiledef.htm
 */
export class IfcArbitraryClosedProfileDef extends IfcProfileDef {
	OuterCurve : IfcCurve

    constructor(profileType : IfcProfileTypeEnum, outerCurve : IfcCurve) {
        super(profileType)
		this.OuterCurve = outerCurve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.OuterCurve))

        return parameters.join();
    }
}