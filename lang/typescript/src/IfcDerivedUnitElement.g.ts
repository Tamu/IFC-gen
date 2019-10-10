
import {BaseIfc} from "./BaseIfc"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcderivedunitelement.htm
 */
export class IfcDerivedUnitElement extends BaseIfc {
	Unit : IfcNamedUnit
	Exponent : number

    constructor(unit : IfcNamedUnit, exponent : number) {
        super()
		this.Unit = unit
		this.Exponent = exponent

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.Exponent))

        return parameters.join();
    }
}