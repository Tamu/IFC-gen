/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcCenterLineProfileDef : IfcArbitraryOpenProfileDef 
	{
		public IfcCenterLineProfileDef(Double thickness,
				Boolean thicknessSpecified,
				IfcBoundedCurve curve,
				IfcProfileDefHasProperties hasProperties,
				IfcProfileTypeEnum profileType,
				Boolean profileTypeSpecified,
				String profileName) : base(curve,
				hasProperties,
				profileType,
				profileTypeSpecified,
				profileName)
		{
			this.thicknessField = thickness;
			this.thicknessSpecifiedField = thicknessSpecified;
		}
	}
}