
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcReinforcingBarRoleEnum} from "./IfcReinforcingBarRoleEnum.g"
import {IfcSectionProperties} from "./IfcSectionProperties.g"
import {IfcReinforcementBarProperties} from "./IfcReinforcementBarProperties.g"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsectionreinforcementproperties.htm
 */
export class IfcSectionReinforcementProperties extends IfcPreDefinedProperties {
	LongitudinalStartPosition : IfcLengthMeasure
	LongitudinalEndPosition : IfcLengthMeasure
	TransversePosition : IfcLengthMeasure // optional
	ReinforcementRole : IfcReinforcingBarRoleEnum
	SectionDefinition : IfcSectionProperties
	CrossSectionReinforcementDefinitions : Array<IfcReinforcementBarProperties>

    constructor(longitudinalStartPosition : IfcLengthMeasure, longitudinalEndPosition : IfcLengthMeasure, reinforcementRole : IfcReinforcingBarRoleEnum, sectionDefinition : IfcSectionProperties, crossSectionReinforcementDefinitions : Array<IfcReinforcementBarProperties>) {
        super()
		this.LongitudinalStartPosition = longitudinalStartPosition
		this.LongitudinalEndPosition = longitudinalEndPosition
		this.ReinforcementRole = reinforcementRole
		this.SectionDefinition = sectionDefinition
		this.CrossSectionReinforcementDefinitions = crossSectionReinforcementDefinitions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.LongitudinalStartPosition))
		parameters.push(BaseIfc.toStepValue(this.LongitudinalEndPosition))
		parameters.push(BaseIfc.toStepValue(this.TransversePosition))
		parameters.push(BaseIfc.toStepValue(this.ReinforcementRole))
		parameters.push(BaseIfc.toStepValue(this.SectionDefinition))
		parameters.push(BaseIfc.toStepValue(this.CrossSectionReinforcementDefinitions))

        return parameters.join();
    }
}