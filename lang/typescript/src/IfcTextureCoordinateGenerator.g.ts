
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcReal} from "./IfcReal.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctexturecoordinategenerator.htm
 */
export class IfcTextureCoordinateGenerator extends IfcTextureCoordinate {
	Mode : IfcLabel
	Parameter : Array<IfcReal> // optional

    constructor(maps : Array<IfcSurfaceTexture>, mode : IfcLabel) {
        super(maps)
		this.Mode = mode

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.Parameter))

        return parameters.join();
    }
}