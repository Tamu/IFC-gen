/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcOffsetCurve2D : IfcCurve 
	{
		public IfcOffsetCurve2D(IfcCurve basisCurve,
				Double distance,
				Boolean distanceSpecified,
				IfcLogical selfIntersect,
				Boolean selfIntersectSpecified,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.basisCurveField = basisCurve;
			this.distanceField = distance;
			this.distanceSpecifiedField = distanceSpecified;
			this.selfIntersectField = selfIntersect;
			this.selfIntersectSpecifiedField = selfIntersectSpecified;
		}
	}
}