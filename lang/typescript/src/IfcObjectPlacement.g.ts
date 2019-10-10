
import {BaseIfc} from "./BaseIfc"
import {IfcProduct} from "./IfcProduct.g"
import {IfcLocalPlacement} from "./IfcLocalPlacement.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcobjectplacement.htm
 */
export abstract class IfcObjectPlacement extends BaseIfc {
	PlacesObject : Array<IfcProduct> // inverse
	ReferencedByPlacements : Array<IfcLocalPlacement> // inverse

    constructor() {
        super()
    }
}