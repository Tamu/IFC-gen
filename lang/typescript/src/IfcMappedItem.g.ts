
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"
import {IfcCartesianTransformationOperator} from "./IfcCartesianTransformationOperator.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmappeditem.htm
 */
export class IfcMappedItem extends IfcRepresentationItem {
	MappingSource : IfcRepresentationMap
	MappingTarget : IfcCartesianTransformationOperator

    constructor(mappingSource : IfcRepresentationMap, mappingTarget : IfcCartesianTransformationOperator) {
        super()
		this.MappingSource = mappingSource
		this.MappingTarget = mappingTarget

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.MappingSource))
		parameters.push(BaseIfc.toStepValue(this.MappingTarget))

        return parameters.join();
    }
}