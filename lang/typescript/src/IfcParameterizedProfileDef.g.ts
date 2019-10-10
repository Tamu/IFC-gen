
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcProfileDef} from "./IfcProfileDef.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcparameterizedprofiledef.htm
 */
export abstract class IfcParameterizedProfileDef extends IfcProfileDef {
	Position : IfcAxis2Placement2D // optional

    constructor(profileType : IfcProfileTypeEnum) {
        super(profileType)
    }
}