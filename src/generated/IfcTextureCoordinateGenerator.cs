/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcTextureCoordinateGenerator : IfcTextureCoordinate 
	{
		public IfcTextureCoordinateGenerator(String mode,
				Double[] parameter,
				IfcTextureCoordinateMaps maps) : base(maps)
		{
			this.modeField = mode;
			this.parameterField = parameter;
		}
	}
}