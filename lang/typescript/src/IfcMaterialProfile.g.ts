
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialprofile.htm
 */
export class IfcMaterialProfile extends IfcMaterialDefinition {
	Name : IfcLabel // optional
	Description : IfcText // optional
	Material : IfcMaterial // optional
	Profile : IfcProfileDef
	Priority : IfcInteger // optional
	Category : IfcLabel // optional
	ToMaterialProfileSet : IfcMaterialProfileSet // inverse

    constructor(profile : IfcProfileDef) {
        super()
		this.Profile = profile

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.Profile))
		parameters.push(BaseIfc.toStepValue(this.Priority))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join();
    }
}