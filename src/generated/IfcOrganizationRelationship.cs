/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcOrganizationRelationship : IfcResourceLevelRelationship 
	{
		public IfcOrganizationRelationship(IfcOrganization relatingOrganization,
				IfcOrganizationRelationshipRelatedOrganizations relatedOrganizations,
				String name,
				String description) : base(name,
				description)
		{
			this.relatingOrganizationField = relatingOrganization;
			this.relatedOrganizationsField = relatedOrganizations;
		}
	}
}