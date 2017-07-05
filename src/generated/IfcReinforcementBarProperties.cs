/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcReinforcementBarProperties : IfcPreDefinedProperties 
	{
		public IfcReinforcementBarProperties(Double totalCrossSectionArea,
				Boolean totalCrossSectionAreaSpecified,
				String steelGrade,
				IfcReinforcingBarSurfaceEnum barSurface,
				Boolean barSurfaceSpecified,
				Double effectiveDepth,
				Boolean effectiveDepthSpecified,
				Double nominalBarDiameter,
				Boolean nominalBarDiameterSpecified,
				Double barCount,
				Boolean barCountSpecified) : base()
		{
			this.totalCrossSectionAreaField = totalCrossSectionArea;
			this.totalCrossSectionAreaSpecifiedField = totalCrossSectionAreaSpecified;
			this.steelGradeField = steelGrade;
			this.barSurfaceField = barSurface;
			this.barSurfaceSpecifiedField = barSurfaceSpecified;
			this.effectiveDepthField = effectiveDepth;
			this.effectiveDepthSpecifiedField = effectiveDepthSpecified;
			this.nominalBarDiameterField = nominalBarDiameter;
			this.nominalBarDiameterSpecifiedField = nominalBarDiameterSpecified;
			this.barCountField = barCount;
			this.barCountSpecifiedField = barCountSpecified;
		}
	}
}