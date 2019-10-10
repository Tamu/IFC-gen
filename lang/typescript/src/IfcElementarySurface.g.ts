
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcSurface} from "./IfcSurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcelementarysurface.htm
 */
export abstract class IfcElementarySurface extends IfcSurface {
	Position : IfcAxis2Placement3D

    constructor(position : IfcAxis2Placement3D) {
        super()
		this.Position = position

    }
}