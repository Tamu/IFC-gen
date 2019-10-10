
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet.g"
import {IfcCardinalPointReference} from "./IfcCardinalPointReference.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcMaterialProfileSetUsage} from "./IfcMaterialProfileSetUsage.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcmaterialprofilesetusagetapering.htm
 */
export class IfcMaterialProfileSetUsageTapering extends IfcMaterialProfileSetUsage {
	ForProfileEndSet : IfcMaterialProfileSet
	CardinalEndPoint : IfcCardinalPointReference // optional

    constructor(forProfileSet : IfcMaterialProfileSet, forProfileEndSet : IfcMaterialProfileSet) {
        super(forProfileSet)
		this.ForProfileEndSet = forProfileEndSet

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ForProfileSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalPoint))
		parameters.push(BaseIfc.toStepValue(this.ReferenceExtent))
		parameters.push(BaseIfc.toStepValue(this.ForProfileEndSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalEndPoint))

        return parameters.join();
    }
}