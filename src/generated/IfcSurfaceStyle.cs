/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcSurfaceStyle : IfcPresentationStyle 
	{
		public IfcSurfaceStyle(IfcSurfaceStyleStyles styles,
				IfcSurfaceSide side,
				Boolean sideSpecified,
				String name) : base(name)
		{
			this.stylesField = styles;
			this.sideField = side;
			this.sideSpecifiedField = sideSpecified;
		}
	}
}