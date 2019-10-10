
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctopologicalrepresentationitem.htm
 */
export abstract class IfcTopologicalRepresentationItem extends IfcRepresentationItem {

    constructor() {
        super()
    }
}