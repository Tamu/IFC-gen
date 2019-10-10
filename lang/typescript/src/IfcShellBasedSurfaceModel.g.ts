
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcOpenShell} from "./IfcOpenShell.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcshellbasedsurfacemodel.htm
 */
export class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem {
	SbsmBoundary : Array<IfcClosedShell|IfcOpenShell>

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(sbsmBoundary : Array<IfcClosedShell|IfcOpenShell>) {
        super()
		this.SbsmBoundary = sbsmBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SbsmBoundary))

        return parameters.join();
    }
}