
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcMaterial} from "./IfcMaterial.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialdefinitionrepresentation.htm
 */
export class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation {
	RepresentedMaterial : IfcMaterial

    constructor(representations : Array<IfcRepresentation>, representedMaterial : IfcMaterial) {
        super(representations)
		this.RepresentedMaterial = representedMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Representations))
		parameters.push(BaseIfc.toStepValue(this.RepresentedMaterial))

        return parameters.join();
    }
}