
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcvector.htm
 */
export class IfcVector extends IfcGeometricRepresentationItem {
	Orientation : IfcDirection
	Magnitude : IfcLengthMeasure

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(orientation : IfcDirection, magnitude : IfcLengthMeasure) {
        super()
		this.Orientation = orientation
		this.Magnitude = magnitude

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Orientation))
		parameters.push(BaseIfc.toStepValue(this.Magnitude))

        return parameters.join();
    }
}