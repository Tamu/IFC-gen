
import {BaseIfc} from "./BaseIfc"
import {IfcMaterial} from "./IfcMaterial.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmateriallist.htm
 */
export class IfcMaterialList extends BaseIfc {
	Materials : Array<IfcMaterial>

    constructor(materials : Array<IfcMaterial>) {
        super()
		this.Materials = materials

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Materials))

        return parameters.join();
    }
}