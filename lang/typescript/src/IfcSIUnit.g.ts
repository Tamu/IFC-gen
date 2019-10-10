
import {BaseIfc} from "./BaseIfc"
import {IfcDimensionalExponents} from "./IfcDimensionalExponents.g"
import {IfcUnitEnum} from "./IfcUnitEnum.g"
import {IfcSIPrefix} from "./IfcSIPrefix.g"
import {IfcSIUnitName} from "./IfcSIUnitName.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcsiunit.htm
 */
export class IfcSIUnit extends IfcNamedUnit {
	Prefix : IfcSIPrefix // optional
	Name : IfcSIUnitName

    get Dimensions() : IfcDimensionalExponents{throw "Derived property logic has not been implemented for Dimensions."} // derived
    set Dimensions(value : IfcDimensionalExponents){super.Dimensions = value}

    constructor(dimensions : IfcDimensionalExponents, unitType : IfcUnitEnum, name : IfcSIUnitName) {
        super(dimensions,unitType)
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Prefix))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join();
    }
}