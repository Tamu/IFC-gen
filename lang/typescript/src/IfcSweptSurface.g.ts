
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcSurface} from "./IfcSurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsweptsurface.htm
 */
export abstract class IfcSweptSurface extends IfcSurface {
	SweptCurve : IfcProfileDef
	Position : IfcAxis2Placement3D // optional

    constructor(sweptCurve : IfcProfileDef) {
        super()
		this.SweptCurve = sweptCurve

    }
}