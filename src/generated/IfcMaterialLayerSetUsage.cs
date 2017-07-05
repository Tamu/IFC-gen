/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcMaterialLayerSetUsage : IfcMaterialUsageDefinition 
	{
		public IfcMaterialLayerSetUsage(IfcMaterialLayerSet forLayerSet,
				IfcLayerSetDirectionEnum layerSetDirection,
				Boolean layerSetDirectionSpecified,
				IfcDirectionSenseEnum directionSense,
				Boolean directionSenseSpecified,
				Double offsetFromReferenceLine,
				Boolean offsetFromReferenceLineSpecified,
				Double referenceExtent,
				Boolean referenceExtentSpecified) : base()
		{
			this.forLayerSetField = forLayerSet;
			this.layerSetDirectionField = layerSetDirection;
			this.layerSetDirectionSpecifiedField = layerSetDirectionSpecified;
			this.directionSenseField = directionSense;
			this.directionSenseSpecifiedField = directionSenseSpecified;
			this.offsetFromReferenceLineField = offsetFromReferenceLine;
			this.offsetFromReferenceLineSpecifiedField = offsetFromReferenceLineSpecified;
			this.referenceExtentField = referenceExtent;
			this.referenceExtentSpecifiedField = referenceExtentSpecified;
		}
	}
}