
import {BaseIfc} from "./BaseIfc"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcunitassignment.htm
 */
export class IfcUnitAssignment extends BaseIfc {
	Units : Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>

    constructor(units : Array<IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit>) {
        super()
		this.Units = units

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Units))

        return parameters.join();
    }
}