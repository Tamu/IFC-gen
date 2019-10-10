
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcEdge} from "./IfcEdge.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsubedge.htm
 */
export class IfcSubedge extends IfcEdge {
	ParentEdge : IfcEdge

    constructor(edgeStart : IfcVertex, edgeEnd : IfcVertex, parentEdge : IfcEdge) {
        super(edgeStart,edgeEnd)
		this.ParentEdge = parentEdge

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))
		parameters.push(BaseIfc.toStepValue(this.ParentEdge))

        return parameters.join();
    }
}