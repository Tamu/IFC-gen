
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcExtrudedAreaSolid} from "./IfcExtrudedAreaSolid.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcextrudedareasolidtapered.htm
 */
export class IfcExtrudedAreaSolidTapered extends IfcExtrudedAreaSolid {
	EndSweptArea : IfcProfileDef

    constructor(sweptArea : IfcProfileDef, extrudedDirection : IfcDirection, depth : IfcPositiveLengthMeasure, endSweptArea : IfcProfileDef) {
        super(sweptArea,extrudedDirection,depth)
		this.EndSweptArea = endSweptArea

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ExtrudedDirection))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.EndSweptArea))

        return parameters.join();
    }
}