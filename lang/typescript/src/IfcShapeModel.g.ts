
import {BaseIfc} from "./BaseIfc"
import {IfcRepresentationContext} from "./IfcRepresentationContext.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcRepresentation} from "./IfcRepresentation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcshapemodel.htm
 */
export abstract class IfcShapeModel extends IfcRepresentation {
	OfShapeAspect : Array<IfcShapeAspect> // inverse

    constructor(contextOfItems : IfcRepresentationContext, items : Array<IfcRepresentationItem>) {
        super(contextOfItems,items)
    }
}