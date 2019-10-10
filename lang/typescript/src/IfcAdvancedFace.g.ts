
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcTextureMap} from "./IfcTextureMap.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcFaceSurface} from "./IfcFaceSurface.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcadvancedface.htm
 */
export class IfcAdvancedFace extends IfcFaceSurface {

    constructor(bounds : Array<IfcFaceBound>, faceSurface : IfcSurface, sameSense : IfcBoolean) {
        super(bounds,faceSurface,sameSense)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Bounds))
		parameters.push(BaseIfc.toStepValue(this.FaceSurface))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

        return parameters.join();
    }
}