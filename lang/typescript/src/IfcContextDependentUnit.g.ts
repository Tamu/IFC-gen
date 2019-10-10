
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccontextdependentunit.htm
 */
export class IfcContextDependentUnit extends IfcNamedUnit {
	Name : IfcLabel
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel) {
        super(dimensions,unitType)
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join();
    }
}