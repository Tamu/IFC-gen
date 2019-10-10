
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifclightsource.htm
 */
export abstract class IfcLightSource extends IfcGeometricRepresentationItem {
	Name : IfcLabel // optional
	LightColour : IfcColourRgb
	AmbientIntensity : IfcNormalisedRatioMeasure // optional
	Intensity : IfcNormalisedRatioMeasure // optional

    constructor(lightColour : IfcColourRgb) {
        super()
		this.LightColour = lightColour

    }
}