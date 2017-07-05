/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcUShapeProfileDef : IfcParameterizedProfileDef 
	{
		public IfcUShapeProfileDef(Double depth,
				Boolean depthSpecified,
				Double flangeWidth,
				Boolean flangeWidthSpecified,
				Double webThickness,
				Boolean webThicknessSpecified,
				Double flangeThickness,
				Boolean flangeThicknessSpecified,
				Double filletRadius,
				Boolean filletRadiusSpecified,
				Double edgeRadius,
				Boolean edgeRadiusSpecified,
				Double flangeSlope,
				Boolean flangeSlopeSpecified,
				IfcAxis2Placement2D position,
				IfcProfileDefHasProperties hasProperties,
				IfcProfileTypeEnum profileType,
				Boolean profileTypeSpecified,
				String profileName) : base(position,
				hasProperties,
				profileType,
				profileTypeSpecified,
				profileName)
		{
			this.depthField = depth;
			this.depthSpecifiedField = depthSpecified;
			this.flangeWidthField = flangeWidth;
			this.flangeWidthSpecifiedField = flangeWidthSpecified;
			this.webThicknessField = webThickness;
			this.webThicknessSpecifiedField = webThicknessSpecified;
			this.flangeThicknessField = flangeThickness;
			this.flangeThicknessSpecifiedField = flangeThicknessSpecified;
			this.filletRadiusField = filletRadius;
			this.filletRadiusSpecifiedField = filletRadiusSpecified;
			this.edgeRadiusField = edgeRadius;
			this.edgeRadiusSpecifiedField = edgeRadiusSpecified;
			this.flangeSlopeField = flangeSlope;
			this.flangeSlopeSpecifiedField = flangeSlopeSpecified;
		}
	}
}