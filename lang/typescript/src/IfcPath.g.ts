
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcOrientedEdge} from "./IfcOrientedEdge.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpath.htm
 */
export class IfcPath extends IfcTopologicalRepresentationItem {
	EdgeList : Array<IfcOrientedEdge>

    constructor(edgeList : Array<IfcOrientedEdge>) {
        super()
		this.EdgeList = edgeList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.EdgeList))

        return parameters.join();
    }
}