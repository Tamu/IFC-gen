
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcStructuralMember} from "./IfcStructuralMember.g"
import {IfcStructuralConnection} from "./IfcStructuralConnection.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"
import {IfcStructuralConnectionCondition} from "./IfcStructuralConnectionCondition.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcConnectionGeometry} from "./IfcConnectionGeometry.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcrelconnectswitheccentricity.htm
 */
export class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember {
	ConnectionConstraint : IfcConnectionGeometry

    constructor(globalId : IfcGloballyUniqueId, relatingStructuralMember : IfcStructuralMember, relatedStructuralConnection : IfcStructuralConnection, connectionConstraint : IfcConnectionGeometry) {
        super(globalId,relatingStructuralMember,relatedStructuralConnection)
		this.ConnectionConstraint = connectionConstraint

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingStructuralMember))
		parameters.push(BaseIfc.toStepValue(this.RelatedStructuralConnection))
		parameters.push(BaseIfc.toStepValue(this.AppliedCondition))
		parameters.push(BaseIfc.toStepValue(this.AdditionalConditions))
		parameters.push(BaseIfc.toStepValue(this.SupportedLength))
		parameters.push(BaseIfc.toStepValue(this.ConditionCoordinateSystem))
		parameters.push(BaseIfc.toStepValue(this.ConnectionConstraint))

        return parameters.join();
    }
}