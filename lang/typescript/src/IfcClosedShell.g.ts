
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFace} from "./IfcFace.g"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcclosedshell.htm
 */
export class IfcClosedShell extends IfcConnectedFaceSet {

    constructor(cfsFaces : Array<IfcFace>) {
        super(cfsFaces)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.CfsFaces))

        return parameters.join();
    }
}