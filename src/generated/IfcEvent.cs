/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcEvent : IfcProcess 
	{
		public IfcEvent(IfcEventTime eventOccurenceTime,
				IfcEventTypeEnum predefinedType,
				Boolean predefinedTypeSpecified,
				IfcEventTriggerTypeEnum eventTriggerType,
				Boolean eventTriggerTypeSpecified,
				String userDefinedEventTriggerType,
				String identification,
				String longDescription,
				IfcRelDefinesByObject isDeclaredBy,
				IfcRelDefinesByType isTypedBy,
				IfcObjectIsDefinedBy isDefinedBy,
				String objectType,
				IfcObjectDefinitionIsNestedBy isNestedBy,
				IfcObjectDefinitionIsDecomposedBy isDecomposedBy) : base(identification,
				longDescription,
				isDeclaredBy,
				isTypedBy,
				isDefinedBy,
				objectType,
				isNestedBy,
				isDecomposedBy)
		{
			this.eventOccurenceTimeField = eventOccurenceTime;
			this.predefinedTypeField = predefinedType;
			this.predefinedTypeSpecifiedField = predefinedTypeSpecified;
			this.eventTriggerTypeField = eventTriggerType;
			this.eventTriggerTypeSpecifiedField = eventTriggerTypeSpecified;
			this.userDefinedEventTriggerTypeField = userDefinedEventTriggerType;
		}
	}
}