
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcTextureMap} from "./IfcTextureMap.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcface.htm
 */
export class IfcFace extends IfcTopologicalRepresentationItem {
	Bounds : Array<IfcFaceBound>
	HasTextureMaps : Array<IfcTextureMap> // inverse

    constructor(bounds : Array<IfcFaceBound>) {
        super()
		this.Bounds = bounds

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Bounds))

        return parameters.join();
    }
}