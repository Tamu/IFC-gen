
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcLightSource} from "./IfcLightSource.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifclightsourceambient.htm
 */
export class IfcLightSourceAmbient extends IfcLightSource {

    constructor(lightColour : IfcColourRgb) {
        super(lightColour)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))

        return parameters.join();
    }
}