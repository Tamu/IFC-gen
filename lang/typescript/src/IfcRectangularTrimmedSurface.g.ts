
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrectangulartrimmedsurface.htm
 */
export class IfcRectangularTrimmedSurface extends IfcBoundedSurface {
	BasisSurface : IfcSurface
	U1 : IfcParameterValue
	V1 : IfcParameterValue
	U2 : IfcParameterValue
	V2 : IfcParameterValue
	Usense : IfcBoolean
	Vsense : IfcBoolean

    constructor(basisSurface : IfcSurface, u1 : IfcParameterValue, v1 : IfcParameterValue, u2 : IfcParameterValue, v2 : IfcParameterValue, usense : IfcBoolean, vsense : IfcBoolean) {
        super()
		this.BasisSurface = basisSurface
		this.U1 = u1
		this.V1 = v1
		this.U2 = u2
		this.V2 = v2
		this.Usense = usense
		this.Vsense = vsense

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.U1))
		parameters.push(BaseIfc.toStepValue(this.V1))
		parameters.push(BaseIfc.toStepValue(this.U2))
		parameters.push(BaseIfc.toStepValue(this.V2))
		parameters.push(BaseIfc.toStepValue(this.Usense))
		parameters.push(BaseIfc.toStepValue(this.Vsense))

        return parameters.join();
    }
}