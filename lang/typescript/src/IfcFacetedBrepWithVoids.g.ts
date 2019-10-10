
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcFacetedBrep} from "./IfcFacetedBrep.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcfacetedbrepwithvoids.htm
 */
export class IfcFacetedBrepWithVoids extends IfcFacetedBrep {
	Voids : Array<IfcClosedShell>

    constructor(outer : IfcClosedShell, voids : Array<IfcClosedShell>) {
        super(outer)
		this.Voids = voids

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Outer))
		parameters.push(BaseIfc.toStepValue(this.Voids))

        return parameters.join();
    }
}