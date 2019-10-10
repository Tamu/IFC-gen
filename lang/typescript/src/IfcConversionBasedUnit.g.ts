
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcconversionbasedunit.htm
 */
export class IfcConversionBasedUnit extends IfcNamedUnit {
	Name : IfcLabel
	ConversionFactor : IfcMeasureWithUnit
	HasExternalReference : Array<IfcExternalReferenceRelationship> // inverse

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcLabel, conversionFactor : IfcMeasureWithUnit) {
        super(dimensions,unitType)
		this.Name = name
		this.ConversionFactor = conversionFactor

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ConversionFactor))

        return parameters.join();
    }
}