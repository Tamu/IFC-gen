/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcFace : IfcTopologicalRepresentationItem 
	{
		public IfcFace(IfcFaceBounds bounds,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.boundsField = bounds;
		}
	}
}