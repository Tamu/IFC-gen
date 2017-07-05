/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcWorkControl : IfcControl 
	{
		public IfcWorkControl(IfcWorkControlCreators creators,
				String creationDate,
				String purpose,
				String duration,
				String totalFloat,
				String startTime,
				String finishTime,
				String identification,
				IfcRelDefinesByObject isDeclaredBy,
				IfcRelDefinesByType isTypedBy,
				IfcObjectIsDefinedBy isDefinedBy,
				String objectType,
				IfcObjectDefinitionIsNestedBy isNestedBy,
				IfcObjectDefinitionIsDecomposedBy isDecomposedBy) : base(identification,
				isDeclaredBy,
				isTypedBy,
				isDefinedBy,
				objectType,
				isNestedBy,
				isDecomposedBy)
		{
			this.creatorsField = creators;
			this.creationDateField = creationDate;
			this.purposeField = purpose;
			this.durationField = duration;
			this.totalFloatField = totalFloat;
			this.startTimeField = startTime;
			this.finishTimeField = finishTime;
		}
	}
}