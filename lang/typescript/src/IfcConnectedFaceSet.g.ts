
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFace} from "./IfcFace.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcconnectedfaceset.htm
 */
export class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem {
	CfsFaces : Array<IfcFace>

    constructor(cfsFaces : Array<IfcFace>) {
        super()
		this.CfsFaces = cfsFaces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.CfsFaces))

        return parameters.join();
    }
}