/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcCartesianTransformationOperator3D : IfcCartesianTransformationOperator 
	{
		public IfcCartesianTransformationOperator3D(IfcDirection axis3,
				IfcDirection axis1,
				IfcDirection axis2,
				IfcCartesianPoint localOrigin,
				Double scale,
				Boolean scaleSpecified,
				IfcStyledItem styledByItem) : base(axis1,
				axis2,
				localOrigin,
				scale,
				scaleSpecified,
				styledByItem)
		{
			this.axis3Field = axis3;
		}
	}
}