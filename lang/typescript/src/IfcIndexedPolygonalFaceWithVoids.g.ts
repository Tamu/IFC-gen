
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet.g"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcindexedpolygonalfacewithvoids.htm
 */
export class IfcIndexedPolygonalFaceWithVoids extends IfcIndexedPolygonalFace {
	InnerCoordIndices : Array<Array<IfcPositiveInteger>>

    constructor(coordIndex : Array<IfcPositiveInteger>, innerCoordIndices : Array<Array<IfcPositiveInteger>>) {
        super(coordIndex)
		this.InnerCoordIndices = innerCoordIndices

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.CoordIndex))
		parameters.push(BaseIfc.toStepValue(this.InnerCoordIndices))

        return parameters.join();
    }
}