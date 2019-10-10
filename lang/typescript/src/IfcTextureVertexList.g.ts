
import {BaseIfc} from "./BaseIfc"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctexturevertexlist.htm
 */
export class IfcTextureVertexList extends IfcPresentationItem {
	TexCoordsList : Array<Array<IfcParameterValue>>

    constructor(texCoordsList : Array<Array<IfcParameterValue>>) {
        super()
		this.TexCoordsList = texCoordsList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.TexCoordsList))

        return parameters.join();
    }
}