
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySet} from "./IfcPropertySet.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcComplexProperty} from "./IfcComplexProperty.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcAbsorbedDoseMeasure} from "./IfcAbsorbedDoseMeasure.g"
import {IfcAccelerationMeasure} from "./IfcAccelerationMeasure.g"
import {IfcAngularVelocityMeasure} from "./IfcAngularVelocityMeasure.g"
import {IfcAreaDensityMeasure} from "./IfcAreaDensityMeasure.g"
import {IfcCompoundPlaneAngleMeasure} from "./IfcCompoundPlaneAngleMeasure.g"
import {IfcCurvatureMeasure} from "./IfcCurvatureMeasure.g"
import {IfcDoseEquivalentMeasure} from "./IfcDoseEquivalentMeasure.g"
import {IfcDynamicViscosityMeasure} from "./IfcDynamicViscosityMeasure.g"
import {IfcElectricCapacitanceMeasure} from "./IfcElectricCapacitanceMeasure.g"
import {IfcElectricChargeMeasure} from "./IfcElectricChargeMeasure.g"
import {IfcElectricConductanceMeasure} from "./IfcElectricConductanceMeasure.g"
import {IfcElectricResistanceMeasure} from "./IfcElectricResistanceMeasure.g"
import {IfcElectricVoltageMeasure} from "./IfcElectricVoltageMeasure.g"
import {IfcEnergyMeasure} from "./IfcEnergyMeasure.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcFrequencyMeasure} from "./IfcFrequencyMeasure.g"
import {IfcHeatFluxDensityMeasure} from "./IfcHeatFluxDensityMeasure.g"
import {IfcHeatingValueMeasure} from "./IfcHeatingValueMeasure.g"
import {IfcIlluminanceMeasure} from "./IfcIlluminanceMeasure.g"
import {IfcInductanceMeasure} from "./IfcInductanceMeasure.g"
import {IfcIntegerCountRateMeasure} from "./IfcIntegerCountRateMeasure.g"
import {IfcIonConcentrationMeasure} from "./IfcIonConcentrationMeasure.g"
import {IfcIsothermalMoistureCapacityMeasure} from "./IfcIsothermalMoistureCapacityMeasure.g"
import {IfcKinematicViscosityMeasure} from "./IfcKinematicViscosityMeasure.g"
import {IfcLinearForceMeasure} from "./IfcLinearForceMeasure.g"
import {IfcLinearMomentMeasure} from "./IfcLinearMomentMeasure.g"
import {IfcLinearStiffnessMeasure} from "./IfcLinearStiffnessMeasure.g"
import {IfcLinearVelocityMeasure} from "./IfcLinearVelocityMeasure.g"
import {IfcLuminousFluxMeasure} from "./IfcLuminousFluxMeasure.g"
import {IfcLuminousIntensityDistributionMeasure} from "./IfcLuminousIntensityDistributionMeasure.g"
import {IfcMagneticFluxDensityMeasure} from "./IfcMagneticFluxDensityMeasure.g"
import {IfcMagneticFluxMeasure} from "./IfcMagneticFluxMeasure.g"
import {IfcMassDensityMeasure} from "./IfcMassDensityMeasure.g"
import {IfcMassFlowRateMeasure} from "./IfcMassFlowRateMeasure.g"
import {IfcMassPerLengthMeasure} from "./IfcMassPerLengthMeasure.g"
import {IfcModulusOfElasticityMeasure} from "./IfcModulusOfElasticityMeasure.g"
import {IfcModulusOfLinearSubgradeReactionMeasure} from "./IfcModulusOfLinearSubgradeReactionMeasure.g"
import {IfcModulusOfRotationalSubgradeReactionMeasure} from "./IfcModulusOfRotationalSubgradeReactionMeasure.g"
import {IfcModulusOfSubgradeReactionMeasure} from "./IfcModulusOfSubgradeReactionMeasure.g"
import {IfcMoistureDiffusivityMeasure} from "./IfcMoistureDiffusivityMeasure.g"
import {IfcMolecularWeightMeasure} from "./IfcMolecularWeightMeasure.g"
import {IfcMomentOfInertiaMeasure} from "./IfcMomentOfInertiaMeasure.g"
import {IfcMonetaryMeasure} from "./IfcMonetaryMeasure.g"
import {IfcPHMeasure} from "./IfcPHMeasure.g"
import {IfcPlanarForceMeasure} from "./IfcPlanarForceMeasure.g"
import {IfcPowerMeasure} from "./IfcPowerMeasure.g"
import {IfcPressureMeasure} from "./IfcPressureMeasure.g"
import {IfcRadioActivityMeasure} from "./IfcRadioActivityMeasure.g"
import {IfcRotationalFrequencyMeasure} from "./IfcRotationalFrequencyMeasure.g"
import {IfcRotationalMassMeasure} from "./IfcRotationalMassMeasure.g"
import {IfcRotationalStiffnessMeasure} from "./IfcRotationalStiffnessMeasure.g"
import {IfcSectionModulusMeasure} from "./IfcSectionModulusMeasure.g"
import {IfcSectionalAreaIntegralMeasure} from "./IfcSectionalAreaIntegralMeasure.g"
import {IfcShearModulusMeasure} from "./IfcShearModulusMeasure.g"
import {IfcSoundPowerLevelMeasure} from "./IfcSoundPowerLevelMeasure.g"
import {IfcSoundPowerMeasure} from "./IfcSoundPowerMeasure.g"
import {IfcSoundPressureLevelMeasure} from "./IfcSoundPressureLevelMeasure.g"
import {IfcSoundPressureMeasure} from "./IfcSoundPressureMeasure.g"
import {IfcSpecificHeatCapacityMeasure} from "./IfcSpecificHeatCapacityMeasure.g"
import {IfcTemperatureGradientMeasure} from "./IfcTemperatureGradientMeasure.g"
import {IfcTemperatureRateOfChangeMeasure} from "./IfcTemperatureRateOfChangeMeasure.g"
import {IfcThermalAdmittanceMeasure} from "./IfcThermalAdmittanceMeasure.g"
import {IfcThermalConductivityMeasure} from "./IfcThermalConductivityMeasure.g"
import {IfcThermalExpansionCoefficientMeasure} from "./IfcThermalExpansionCoefficientMeasure.g"
import {IfcThermalResistanceMeasure} from "./IfcThermalResistanceMeasure.g"
import {IfcThermalTransmittanceMeasure} from "./IfcThermalTransmittanceMeasure.g"
import {IfcTorqueMeasure} from "./IfcTorqueMeasure.g"
import {IfcVaporPermeabilityMeasure} from "./IfcVaporPermeabilityMeasure.g"
import {IfcVolumetricFlowRateMeasure} from "./IfcVolumetricFlowRateMeasure.g"
import {IfcWarpingConstantMeasure} from "./IfcWarpingConstantMeasure.g"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure.g"
import {IfcAmountOfSubstanceMeasure} from "./IfcAmountOfSubstanceMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcComplexNumber} from "./IfcComplexNumber.g"
import {IfcContextDependentMeasure} from "./IfcContextDependentMeasure.g"
import {IfcCountMeasure} from "./IfcCountMeasure.g"
import {IfcDescriptiveMeasure} from "./IfcDescriptiveMeasure.g"
import {IfcElectricCurrentMeasure} from "./IfcElectricCurrentMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcLuminousIntensityMeasure} from "./IfcLuminousIntensityMeasure.g"
import {IfcMassMeasure} from "./IfcMassMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcNumericMeasure} from "./IfcNumericMeasure.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPositivePlaneAngleMeasure} from "./IfcPositivePlaneAngleMeasure.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcSolidAngleMeasure} from "./IfcSolidAngleMeasure.g"
import {IfcThermodynamicTemperatureMeasure} from "./IfcThermodynamicTemperatureMeasure.g"
import {IfcTimeMeasure} from "./IfcTimeMeasure.g"
import {IfcVolumeMeasure} from "./IfcVolumeMeasure.g"
import {IfcBinary} from "./IfcBinary.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcDate} from "./IfcDate.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcReal} from "./IfcReal.g"
import {IfcTime} from "./IfcTime.g"
import {IfcTimeStamp} from "./IfcTimeStamp.g"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcCurveInterpolationEnum} from "./IfcCurveInterpolationEnum.g"
import {IfcSimpleProperty} from "./IfcSimpleProperty.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcpropertytablevalue.htm
 */
export class IfcPropertyTableValue extends IfcSimpleProperty {
	DefiningValues : Array<IfcAbsorbedDoseMeasure|IfcAccelerationMeasure|IfcAngularVelocityMeasure|IfcAreaDensityMeasure|IfcCompoundPlaneAngleMeasure|IfcCurvatureMeasure|IfcDoseEquivalentMeasure|IfcDynamicViscosityMeasure|IfcElectricCapacitanceMeasure|IfcElectricChargeMeasure|IfcElectricConductanceMeasure|IfcElectricResistanceMeasure|IfcElectricVoltageMeasure|IfcEnergyMeasure|IfcForceMeasure|IfcFrequencyMeasure|IfcHeatFluxDensityMeasure|IfcHeatingValueMeasure|IfcIlluminanceMeasure|IfcInductanceMeasure|IfcIntegerCountRateMeasure|IfcIonConcentrationMeasure|IfcIsothermalMoistureCapacityMeasure|IfcKinematicViscosityMeasure|IfcLinearForceMeasure|IfcLinearMomentMeasure|IfcLinearStiffnessMeasure|IfcLinearVelocityMeasure|IfcLuminousFluxMeasure|IfcLuminousIntensityDistributionMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcMassDensityMeasure|IfcMassFlowRateMeasure|IfcMassPerLengthMeasure|IfcModulusOfElasticityMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcModulusOfSubgradeReactionMeasure|IfcMoistureDiffusivityMeasure|IfcMolecularWeightMeasure|IfcMomentOfInertiaMeasure|IfcMonetaryMeasure|IfcPHMeasure|IfcPlanarForceMeasure|IfcPowerMeasure|IfcPressureMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcRotationalMassMeasure|IfcRotationalStiffnessMeasure|IfcSectionModulusMeasure|IfcSectionalAreaIntegralMeasure|IfcShearModulusMeasure|IfcSoundPowerLevelMeasure|IfcSoundPowerMeasure|IfcSoundPressureLevelMeasure|IfcSoundPressureMeasure|IfcSpecificHeatCapacityMeasure|IfcTemperatureGradientMeasure|IfcTemperatureRateOfChangeMeasure|IfcThermalAdmittanceMeasure|IfcThermalConductivityMeasure|IfcThermalExpansionCoefficientMeasure|IfcThermalResistanceMeasure|IfcThermalTransmittanceMeasure|IfcTorqueMeasure|IfcVaporPermeabilityMeasure|IfcVolumetricFlowRateMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcAmountOfSubstanceMeasure|IfcAreaMeasure|IfcComplexNumber|IfcContextDependentMeasure|IfcCountMeasure|IfcDescriptiveMeasure|IfcElectricCurrentMeasure|IfcLengthMeasure|IfcLuminousIntensityMeasure|IfcMassMeasure|IfcNonNegativeLengthMeasure|IfcNormalisedRatioMeasure|IfcNumericMeasure|IfcParameterValue|IfcPlaneAngleMeasure|IfcPositiveLengthMeasure|IfcPositivePlaneAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcSolidAngleMeasure|IfcThermodynamicTemperatureMeasure|IfcTimeMeasure|IfcVolumeMeasure|IfcBinary|IfcBoolean|IfcDate|IfcDateTime|IfcDuration|IfcIdentifier|IfcInteger|IfcLabel|IfcLogical|IfcPositiveInteger|IfcReal|IfcText|IfcTime|IfcTimeStamp> // optional
	DefinedValues : Array<IfcAbsorbedDoseMeasure|IfcAccelerationMeasure|IfcAngularVelocityMeasure|IfcAreaDensityMeasure|IfcCompoundPlaneAngleMeasure|IfcCurvatureMeasure|IfcDoseEquivalentMeasure|IfcDynamicViscosityMeasure|IfcElectricCapacitanceMeasure|IfcElectricChargeMeasure|IfcElectricConductanceMeasure|IfcElectricResistanceMeasure|IfcElectricVoltageMeasure|IfcEnergyMeasure|IfcForceMeasure|IfcFrequencyMeasure|IfcHeatFluxDensityMeasure|IfcHeatingValueMeasure|IfcIlluminanceMeasure|IfcInductanceMeasure|IfcIntegerCountRateMeasure|IfcIonConcentrationMeasure|IfcIsothermalMoistureCapacityMeasure|IfcKinematicViscosityMeasure|IfcLinearForceMeasure|IfcLinearMomentMeasure|IfcLinearStiffnessMeasure|IfcLinearVelocityMeasure|IfcLuminousFluxMeasure|IfcLuminousIntensityDistributionMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcMassDensityMeasure|IfcMassFlowRateMeasure|IfcMassPerLengthMeasure|IfcModulusOfElasticityMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcModulusOfSubgradeReactionMeasure|IfcMoistureDiffusivityMeasure|IfcMolecularWeightMeasure|IfcMomentOfInertiaMeasure|IfcMonetaryMeasure|IfcPHMeasure|IfcPlanarForceMeasure|IfcPowerMeasure|IfcPressureMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcRotationalMassMeasure|IfcRotationalStiffnessMeasure|IfcSectionModulusMeasure|IfcSectionalAreaIntegralMeasure|IfcShearModulusMeasure|IfcSoundPowerLevelMeasure|IfcSoundPowerMeasure|IfcSoundPressureLevelMeasure|IfcSoundPressureMeasure|IfcSpecificHeatCapacityMeasure|IfcTemperatureGradientMeasure|IfcTemperatureRateOfChangeMeasure|IfcThermalAdmittanceMeasure|IfcThermalConductivityMeasure|IfcThermalExpansionCoefficientMeasure|IfcThermalResistanceMeasure|IfcThermalTransmittanceMeasure|IfcTorqueMeasure|IfcVaporPermeabilityMeasure|IfcVolumetricFlowRateMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcAmountOfSubstanceMeasure|IfcAreaMeasure|IfcComplexNumber|IfcContextDependentMeasure|IfcCountMeasure|IfcDescriptiveMeasure|IfcElectricCurrentMeasure|IfcLengthMeasure|IfcLuminousIntensityMeasure|IfcMassMeasure|IfcNonNegativeLengthMeasure|IfcNormalisedRatioMeasure|IfcNumericMeasure|IfcParameterValue|IfcPlaneAngleMeasure|IfcPositiveLengthMeasure|IfcPositivePlaneAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcSolidAngleMeasure|IfcThermodynamicTemperatureMeasure|IfcTimeMeasure|IfcVolumeMeasure|IfcBinary|IfcBoolean|IfcDate|IfcDateTime|IfcDuration|IfcIdentifier|IfcInteger|IfcLabel|IfcLogical|IfcPositiveInteger|IfcReal|IfcText|IfcTime|IfcTimeStamp> // optional
	Expression : IfcText // optional
	DefiningUnit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	DefinedUnit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	CurveInterpolation : IfcCurveInterpolationEnum // optional

    constructor(name : IfcIdentifier) {
        super(name)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.DefiningValues))
		parameters.push(BaseIfc.toStepValue(this.DefinedValues))
		parameters.push(BaseIfc.toStepValue(this.Expression))
		parameters.push(BaseIfc.toStepValue(this.DefiningUnit))
		parameters.push(BaseIfc.toStepValue(this.DefinedUnit))
		parameters.push(BaseIfc.toStepValue(this.CurveInterpolation))

        return parameters.join();
    }
}