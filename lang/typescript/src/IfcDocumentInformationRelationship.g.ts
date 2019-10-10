
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDocumentInformation} from "./IfcDocumentInformation.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcdocumentinformationrelationship.htm
 */
export class IfcDocumentInformationRelationship extends IfcResourceLevelRelationship {
	RelatingDocument : IfcDocumentInformation
	RelatedDocuments : Array<IfcDocumentInformation>
	RelationshipType : IfcLabel // optional

    constructor(relatingDocument : IfcDocumentInformation, relatedDocuments : Array<IfcDocumentInformation>) {
        super()
		this.RelatingDocument = relatingDocument
		this.RelatedDocuments = relatedDocuments

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingDocument))
		parameters.push(BaseIfc.toStepValue(this.RelatedDocuments))
		parameters.push(BaseIfc.toStepValue(this.RelationshipType))

        return parameters.join();
    }
}