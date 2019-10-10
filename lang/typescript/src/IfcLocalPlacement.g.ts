
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifclocalplacement.htm
 */
export class IfcLocalPlacement extends IfcObjectPlacement {
	PlacementRelTo : IfcObjectPlacement // optional
	RelativePlacement : IfcAxis2Placement2D|IfcAxis2Placement3D

    constructor(relativePlacement : IfcAxis2Placement2D|IfcAxis2Placement3D) {
        super()
		this.RelativePlacement = relativePlacement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.PlacementRelTo))
		parameters.push(BaseIfc.toStepValue(this.RelativePlacement))

        return parameters.join();
    }
}