
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum.g"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcStructuralActivity} from "./IfcStructuralActivity.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcstructuralreaction.htm
 */
export abstract class IfcStructuralReaction extends IfcStructuralActivity {

    constructor(globalId : IfcGloballyUniqueId, appliedLoad : IfcStructuralLoad, globalOrLocal : IfcGlobalOrLocalEnum) {
        super(globalId,appliedLoad,globalOrLocal)
    }
}