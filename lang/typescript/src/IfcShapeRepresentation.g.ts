
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcShapeModel} from "./IfcShapeModel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcshaperepresentation.htm
 */
export class IfcShapeRepresentation extends IfcShapeModel {

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ContextOfItems))
		parameters.push(BaseIfc.toStepValue(this.RepresentationIdentifier))
		parameters.push(BaseIfc.toStepValue(this.RepresentationType))
		parameters.push(BaseIfc.toStepValue(this.Items))

        return parameters.join();
    }
}