
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcPreferredSurfaceCurveRepresentation} from "./IfcPreferredSurfaceCurveRepresentation.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcintersectioncurve.htm
 */
export class IfcIntersectionCurve extends IfcSurfaceCurve {

    constructor(curve3D : IfcCurve, associatedGeometry : Array<IfcPcurve>, masterRepresentation : IfcPreferredSurfaceCurveRepresentation) {
        super(curve3D,associatedGeometry,masterRepresentation)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Curve3D))
		parameters.push(BaseIfc.toStepValue(this.AssociatedGeometry))
		parameters.push(BaseIfc.toStepValue(this.MasterRepresentation))

        return parameters.join();
    }
}