/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcMaterialProfile : IfcMaterialDefinition 
	{
		public IfcMaterialProfile(IfcMaterial material,
				IfcProfileDef profile,
				String name,
				String description,
				Int64 priority,
				Boolean prioritySpecified,
				String category,
				IfcMaterialDefinitionHasProperties hasProperties) : base(hasProperties)
		{
			this.materialField = material;
			this.profileField = profile;
			this.nameField = name;
			this.descriptionField = description;
			this.priorityField = priority;
			this.prioritySpecifiedField = prioritySpecified;
			this.categoryField = category;
		}
	}
}