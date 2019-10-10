
import {BaseIfc} from "./BaseIfc"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcSolidModel} from "./IfcSolidModel.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcconnectionvolumegeometry.htm
 */
export class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
	VolumeOnRelatingElement : IfcClosedShell|IfcSolidModel
	VolumeOnRelatedElement : IfcClosedShell|IfcSolidModel // optional

    constructor(volumeOnRelatingElement : IfcClosedShell|IfcSolidModel) {
        super()
		this.VolumeOnRelatingElement = volumeOnRelatingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.VolumeOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.VolumeOnRelatedElement))

        return parameters.join();
    }
}