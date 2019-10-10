
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet.g"
import {IfcTessellatedItem} from "./IfcTessellatedItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcindexedpolygonalface.htm
 */
export class IfcIndexedPolygonalFace extends IfcTessellatedItem {
	CoordIndex : Array<IfcPositiveInteger>
	ToFaceSet : Array<IfcPolygonalFaceSet> // inverse

    constructor(coordIndex : Array<IfcPositiveInteger>) {
        super()
		this.CoordIndex = coordIndex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.CoordIndex))

        return parameters.join();
    }
}