
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum.g"
import {IfcText} from "./IfcText.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcOrganization} from "./IfcOrganization.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcaddress.htm
 */
export abstract class IfcAddress extends BaseIfc {
	Purpose : IfcAddressTypeEnum // optional
	Description : IfcText // optional
	UserDefinedPurpose : IfcLabel // optional
	OfPerson : Array<IfcPerson> // inverse
	OfOrganization : Array<IfcOrganization> // inverse

    constructor() {
        super()
    }
}