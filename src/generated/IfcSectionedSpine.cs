/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcSectionedSpine : IfcGeometricRepresentationItem 
	{
		public IfcSectionedSpine(IfcCompositeCurve spineCurve,
				IfcSectionedSpineCrossSections crossSections,
				IfcSectionedSpineCrossSectionPositions crossSectionPositions,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.spineCurveField = spineCurve;
			this.crossSectionsField = crossSections;
			this.crossSectionPositionsField = crossSectionPositions;
		}
	}
}