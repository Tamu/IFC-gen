/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcLightSourceDirectional : IfcLightSource 
	{
		public IfcLightSourceDirectional(IfcDirection orientation,
				IfcColourRgb lightColour,
				String name,
				Double ambientIntensity,
				Boolean ambientIntensitySpecified,
				Double intensity,
				Boolean intensitySpecified,
				IfcStyledItem styledByItem) : base(lightColour,
				name,
				ambientIntensity,
				ambientIntensitySpecified,
				intensity,
				intensitySpecified,
				styledByItem)
		{
			this.orientationField = orientation;
		}
	}
}