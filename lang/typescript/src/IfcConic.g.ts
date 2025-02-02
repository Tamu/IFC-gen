
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcCurve} from "./IfcCurve.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcconic.htm
 */
export abstract class IfcConic extends IfcCurve {
	Position : IfcAxis2Placement2D|IfcAxis2Placement3D

    constructor(position : IfcAxis2Placement2D|IfcAxis2Placement3D) {
        super()
		this.Position = position

    }
}