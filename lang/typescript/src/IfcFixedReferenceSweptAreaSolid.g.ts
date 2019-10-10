
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcfixedreferencesweptareasolid.htm
 */
export class IfcFixedReferenceSweptAreaSolid extends IfcSweptAreaSolid {
	Directrix : IfcCurve
	StartParam : IfcParameterValue // optional
	EndParam : IfcParameterValue // optional
	FixedReference : IfcDirection

    constructor(sweptArea : IfcProfileDef, directrix : IfcCurve, fixedReference : IfcDirection) {
        super(sweptArea)
		this.Directrix = directrix
		this.FixedReference = fixedReference

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Directrix))
		parameters.push(BaseIfc.toStepValue(this.StartParam))
		parameters.push(BaseIfc.toStepValue(this.EndParam))
		parameters.push(BaseIfc.toStepValue(this.FixedReference))

        return parameters.join();
    }
}