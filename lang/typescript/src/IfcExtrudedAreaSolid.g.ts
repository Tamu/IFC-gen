
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcextrudedareasolid.htm
 */
export class IfcExtrudedAreaSolid extends IfcSweptAreaSolid {
	ExtrudedDirection : IfcDirection
	Depth : IfcPositiveLengthMeasure

    constructor(sweptArea : IfcProfileDef, extrudedDirection : IfcDirection, depth : IfcPositiveLengthMeasure) {
        super(sweptArea)
		this.ExtrudedDirection = extrudedDirection
		this.Depth = depth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ExtrudedDirection))
		parameters.push(BaseIfc.toStepValue(this.Depth))

        return parameters.join();
    }
}