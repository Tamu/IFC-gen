/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcVertexPoint : IfcVertex 
	{
		public IfcVertexPoint(IfcPoint vertexGeometry,
				IfcStyledItem styledByItem) : base(styledByItem)
		{
			this.vertexGeometryField = vertexGeometry;
		}
	}
}