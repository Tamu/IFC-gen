
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcMaterialConstituentSet} from "./IfcMaterialConstituentSet.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialconstituent.htm
 */
export class IfcMaterialConstituent extends IfcMaterialDefinition {
	Name : IfcLabel // optional
	Description : IfcText // optional
	Material : IfcMaterial
	Fraction : IfcNormalisedRatioMeasure // optional
	Category : IfcLabel // optional
	ToMaterialConstituentSet : IfcMaterialConstituentSet // inverse

    constructor(material : IfcMaterial) {
        super()
		this.Material = material

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.Fraction))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join();
    }
}