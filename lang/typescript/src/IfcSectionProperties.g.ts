
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcSectionTypeEnum} from "./IfcSectionTypeEnum.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsectionproperties.htm
 */
export class IfcSectionProperties extends IfcPreDefinedProperties {
	SectionType : IfcSectionTypeEnum
	StartProfile : IfcProfileDef
	EndProfile : IfcProfileDef // optional

    constructor(sectionType : IfcSectionTypeEnum, startProfile : IfcProfileDef) {
        super()
		this.SectionType = sectionType
		this.StartProfile = startProfile

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SectionType))
		parameters.push(BaseIfc.toStepValue(this.StartProfile))
		parameters.push(BaseIfc.toStepValue(this.EndProfile))

        return parameters.join();
    }
}