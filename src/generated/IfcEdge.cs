/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcEdge : IfcTopologicalRepresentationItem 
	{
		public IfcEdge(IfcVertex edgeStart,
				IfcVertex edgeEnd,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.edgeStartField = edgeStart;
			this.edgeEndField = edgeEnd;
		}
	}
}