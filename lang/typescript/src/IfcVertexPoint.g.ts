
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcVertex} from "./IfcVertex.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcvertexpoint.htm
 */
export class IfcVertexPoint extends IfcVertex {
	VertexGeometry : IfcPoint

    constructor(vertexGeometry : IfcPoint) {
        super()
		this.VertexGeometry = vertexGeometry

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.VertexGeometry))

        return parameters.join();
    }
}