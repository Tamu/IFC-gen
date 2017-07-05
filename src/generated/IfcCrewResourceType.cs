/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcCrewResourceType : IfcConstructionResourceType 
	{
		public IfcCrewResourceType(IfcCrewResourceTypeEnum predefinedType,
				Boolean predefinedTypeSpecified,
				IfcConstructionResourceTypeBaseCosts baseCosts,
				IfcPhysicalQuantity baseQuantity,
				String identification,
				String longDescription,
				String resourceType,
				IfcTypeObjectHasPropertySets hasPropertySets,
				String applicableOccurrence,
				IfcObjectDefinitionIsNestedBy isNestedBy,
				IfcObjectDefinitionIsDecomposedBy isDecomposedBy) : base(baseCosts,
				baseQuantity,
				identification,
				longDescription,
				resourceType,
				hasPropertySets,
				applicableOccurrence,
				isNestedBy,
				isDecomposedBy)
		{
			this.predefinedTypeField = predefinedType;
			this.predefinedTypeSpecifiedField = predefinedTypeSpecified;
		}
	}
}