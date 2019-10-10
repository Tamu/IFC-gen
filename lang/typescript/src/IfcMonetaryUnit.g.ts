
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmonetaryunit.htm
 */
export class IfcMonetaryUnit extends BaseIfc {
	Currency : IfcLabel

    constructor(currency : IfcLabel) {
        super()
		this.Currency = currency

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Currency))

        return parameters.join();
    }
}