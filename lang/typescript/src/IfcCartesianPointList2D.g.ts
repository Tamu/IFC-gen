
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifccartesianpointlist2d.htm
 */
export class IfcCartesianPointList2D extends IfcCartesianPointList {
	CoordList : Array<Array<IfcLengthMeasure>>

    constructor(coordList : Array<Array<IfcLengthMeasure>>) {
        super()
		this.CoordList = coordList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.CoordList))

        return parameters.join();
    }
}