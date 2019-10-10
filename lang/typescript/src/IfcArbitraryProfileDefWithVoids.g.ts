
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcArbitraryClosedProfileDef} from "./IfcArbitraryClosedProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcarbitraryprofiledefwithvoids.htm
 */
export class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef {
	InnerCurves : Array<IfcCurve>

    constructor(profileType : IfcProfileTypeEnum, outerCurve : IfcCurve, innerCurves : Array<IfcCurve>) {
        super(profileType,outerCurve)
		this.InnerCurves = innerCurves

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.OuterCurve))
		parameters.push(BaseIfc.toStepValue(this.InnerCurves))

        return parameters.join();
    }
}