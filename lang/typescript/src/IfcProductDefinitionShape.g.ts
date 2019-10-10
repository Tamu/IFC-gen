
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcProduct} from "./IfcProduct.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcproductdefinitionshape.htm
 */
export class IfcProductDefinitionShape extends IfcProductRepresentation {
	ShapeOfProduct : Array<IfcProduct> // inverse
	HasShapeAspects : Array<IfcShapeAspect> // inverse

    constructor(representations : Array<IfcRepresentation>) {
        super(representations)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Representations))

        return parameters.join();
    }
}