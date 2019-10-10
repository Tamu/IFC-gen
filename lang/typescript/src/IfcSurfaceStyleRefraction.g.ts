
import {BaseIfc} from "./BaseIfc"
import {IfcReal} from "./IfcReal.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsurfacestylerefraction.htm
 */
export class IfcSurfaceStyleRefraction extends IfcPresentationItem {
	RefractionIndex : IfcReal // optional
	DispersionFactor : IfcReal // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.RefractionIndex))
		parameters.push(BaseIfc.toStepValue(this.DispersionFactor))

        return parameters.join();
    }
}