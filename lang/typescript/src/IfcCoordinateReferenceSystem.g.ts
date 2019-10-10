
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccoordinatereferencesystem.htm
 */
export abstract class IfcCoordinateReferenceSystem extends BaseIfc {
	Name : IfcLabel
	Description : IfcText // optional
	GeodeticDatum : IfcIdentifier // optional
	VerticalDatum : IfcIdentifier // optional
	HasCoordinateOperation : Array<IfcCoordinateOperation> // inverse

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
}