/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcConnectionPointGeometry : IfcConnectionGeometry 
	{
		public IfcConnectionPointGeometry(IfcConnectionPointGeometryPointOnRelatingElement pointOnRelatingElement,
				IfcConnectionPointGeometryPointOnRelatedElement pointOnRelatedElement) : base()
		{
			this.pointOnRelatingElementField = pointOnRelatingElement;
			this.pointOnRelatedElementField = pointOnRelatedElement;
		}
	}
}