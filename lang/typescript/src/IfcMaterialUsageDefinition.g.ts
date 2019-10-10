
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialusagedefinition.htm
 */
export abstract class IfcMaterialUsageDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial> // inverse

    constructor() {
        super()
    }
}