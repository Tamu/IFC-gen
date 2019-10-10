
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTextureVertex} from "./IfcTextureVertex.g"
import {IfcFace} from "./IfcFace.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctexturemap.htm
 */
export class IfcTextureMap extends IfcTextureCoordinate {
	Vertices : Array<IfcTextureVertex>
	MappedTo : IfcFace

    constructor(maps : Array<IfcSurfaceTexture>, vertices : Array<IfcTextureVertex>, mappedTo : IfcFace) {
        super(maps)
		this.Vertices = vertices
		this.MappedTo = mappedTo

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.Vertices))
		parameters.push(BaseIfc.toStepValue(this.MappedTo))

        return parameters.join();
    }
}