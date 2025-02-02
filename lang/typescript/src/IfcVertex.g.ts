
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcvertex.htm
 */
export class IfcVertex extends IfcTopologicalRepresentationItem {

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();

        return parameters.join();
    }
}