/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcAnnotationFillArea : IfcGeometricRepresentationItem 
	{
		public IfcAnnotationFillArea(IfcCurve outerBoundary,
				IfcAnnotationFillAreaInnerBoundaries innerBoundaries,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.outerBoundaryField = outerBoundary;
			this.innerBoundariesField = innerBoundaries;
		}
	}
}