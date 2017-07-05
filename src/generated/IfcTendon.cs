/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcTendon : IfcReinforcingElement 
	{
		public IfcTendon(IfcTendonTypeEnum predefinedType,
				Boolean predefinedTypeSpecified,
				Double nominalDiameter,
				Boolean nominalDiameterSpecified,
				Double crossSectionArea,
				Boolean crossSectionAreaSpecified,
				Double tensionForce,
				Boolean tensionForceSpecified,
				Double preStress,
				Boolean preStressSpecified,
				Double frictionCoefficient,
				Boolean frictionCoefficientSpecified,
				Double anchorageSlip,
				Boolean anchorageSlipSpecified,
				Double minCurvatureRadius,
				Boolean minCurvatureRadiusSpecified,
				String steelGrade,
				IfcRelProjectsElement hasProjections,
				IfcRelVoidsElement hasOpenings,
				String tag,
				IfcObjectPlacement objectPlacement,
				IfcProductRepresentation representation,
				IfcRelDefinesByObject isDeclaredBy,
				IfcRelDefinesByType isTypedBy,
				IfcObjectIsDefinedBy isDefinedBy,
				String objectType,
				IfcObjectDefinitionIsNestedBy isNestedBy,
				IfcObjectDefinitionIsDecomposedBy isDecomposedBy) : base(steelGrade,
				hasProjections,
				hasOpenings,
				tag,
				objectPlacement,
				representation,
				isDeclaredBy,
				isTypedBy,
				isDefinedBy,
				objectType,
				isNestedBy,
				isDecomposedBy)
		{
			this.predefinedTypeField = predefinedType;
			this.predefinedTypeSpecifiedField = predefinedTypeSpecified;
			this.nominalDiameterField = nominalDiameter;
			this.nominalDiameterSpecifiedField = nominalDiameterSpecified;
			this.crossSectionAreaField = crossSectionArea;
			this.crossSectionAreaSpecifiedField = crossSectionAreaSpecified;
			this.tensionForceField = tensionForce;
			this.tensionForceSpecifiedField = tensionForceSpecified;
			this.preStressField = preStress;
			this.preStressSpecifiedField = preStressSpecified;
			this.frictionCoefficientField = frictionCoefficient;
			this.frictionCoefficientSpecifiedField = frictionCoefficientSpecified;
			this.anchorageSlipField = anchorageSlip;
			this.anchorageSlipSpecifiedField = anchorageSlipSpecified;
			this.minCurvatureRadiusField = minCurvatureRadius;
			this.minCurvatureRadiusSpecifiedField = minCurvatureRadiusSpecified;
		}
	}
}