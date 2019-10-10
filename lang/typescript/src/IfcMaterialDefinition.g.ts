
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialdefinition.htm
 */
export abstract class IfcMaterialDefinition extends BaseIfc {
	AssociatedTo : Array<IfcRelAssociatesMaterial> // inverse
	HasExternalReferences : Array<IfcExternalReferenceRelationship> // inverse
	HasProperties : Array<IfcMaterialProperties> // inverse

    constructor() {
        super()
    }
}