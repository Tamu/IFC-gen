
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcManifoldSolidBrep} from "./IfcManifoldSolidBrep.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcadvancedbrep.htm
 */
export class IfcAdvancedBrep extends IfcManifoldSolidBrep {

    constructor(outer : IfcClosedShell) {
        super(outer)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Outer))

        return parameters.join();
    }
}