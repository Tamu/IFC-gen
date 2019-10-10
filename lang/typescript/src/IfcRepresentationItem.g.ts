
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrepresentationitem.htm
 */
export abstract class IfcRepresentationItem extends BaseIfc {
	LayerAssignment : Array<IfcPresentationLayerAssignment> // inverse
	StyledByItem : Array<IfcStyledItem> // inverse

    constructor() {
        super()
    }
}