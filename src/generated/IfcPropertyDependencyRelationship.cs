/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcPropertyDependencyRelationship : IfcResourceLevelRelationship 
	{
		public IfcPropertyDependencyRelationship(IfcProperty dependingProperty,
				IfcProperty dependantProperty,
				String expression,
				String name,
				String description) : base(name,
				description)
		{
			this.dependingPropertyField = dependingProperty;
			this.dependantPropertyField = dependantProperty;
			this.expressionField = expression;
		}
	}
}