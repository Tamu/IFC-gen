/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcRightCircularCylinder : IfcCsgPrimitive3D 
	{
		public IfcRightCircularCylinder(Double height,
				Boolean heightSpecified,
				Double radius,
				Boolean radiusSpecified,
				IfcAxis2Placement3D position,
				IfcStyledItem styledByItem) : base(position,
				styledByItem)
		{
			this.heightField = height;
			this.heightSpecifiedField = heightSpecified;
			this.radiusField = radius;
			this.radiusSpecifiedField = radiusSpecified;
		}
	}
}