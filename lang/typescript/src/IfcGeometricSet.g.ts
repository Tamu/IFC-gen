
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcgeometricset.htm
 */
export class IfcGeometricSet extends IfcGeometricRepresentationItem {
	Elements : Array<IfcCurve|IfcPoint|IfcSurface>

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(elements : Array<IfcCurve|IfcPoint|IfcSurface>) {
        super()
		this.Elements = elements

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Elements))

        return parameters.join();
    }
}