/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcLightSourceGoniometric : IfcLightSource 
	{
		public IfcLightSourceGoniometric(IfcAxis2Placement3D position,
				IfcColourRgb colourAppearance,
				IfcLightSourceGoniometricLightDistributionDataSource lightDistributionDataSource,
				Double colourTemperature,
				Boolean colourTemperatureSpecified,
				Double luminousFlux,
				Boolean luminousFluxSpecified,
				IfcLightEmissionSourceEnum lightEmissionSource,
				Boolean lightEmissionSourceSpecified,
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
			this.positionField = position;
			this.colourAppearanceField = colourAppearance;
			this.lightDistributionDataSourceField = lightDistributionDataSource;
			this.colourTemperatureField = colourTemperature;
			this.colourTemperatureSpecifiedField = colourTemperatureSpecified;
			this.luminousFluxField = luminousFlux;
			this.luminousFluxSpecifiedField = luminousFluxSpecified;
			this.lightEmissionSourceField = lightEmissionSource;
			this.lightEmissionSourceSpecifiedField = lightEmissionSourceSpecified;
		}
	}
}