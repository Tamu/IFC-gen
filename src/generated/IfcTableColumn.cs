/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcTableColumn : Entity 
	{
		public IfcTableColumn(IfcTableColumnUnit unit,
				IfcReference referencePath,
				String identifier,
				String name,
				String description) : base()
		{
			this.unitField = unit;
			this.referencePathField = referencePath;
			this.identifierField = identifier;
			this.nameField = name;
			this.descriptionField = description;
		}
	}
}