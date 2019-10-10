
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifctexturecoordinate.htm
 */
export abstract class IfcTextureCoordinate extends IfcPresentationItem {
	Maps : Array<IfcSurfaceTexture>

    constructor(maps : Array<IfcSurfaceTexture>) {
        super()
		this.Maps = maps

    }
}