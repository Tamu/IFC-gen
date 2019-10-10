
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcnamedunit.htm
 */
export abstract class IfcNamedUnit extends BaseIfc {
	Dimensions : IfcDimensionalExponents
	UnitType : IfcUnitEnum

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum) {
        super()
		this.Dimensions = dimensions
		this.UnitType = unitType

    }
}