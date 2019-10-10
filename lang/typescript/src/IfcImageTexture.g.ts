
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcimagetexture.htm
 */
export class IfcImageTexture extends IfcSurfaceTexture {
	URLReference : IfcURIReference

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean, uRLReference : IfcURIReference) {
        super(repeatS,repeatT)
		this.URLReference = uRLReference

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.URLReference))

        return parameters.join();
    }
}