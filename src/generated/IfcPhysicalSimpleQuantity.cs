/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcPhysicalSimpleQuantity : IfcPhysicalQuantity 
	{
		public IfcPhysicalSimpleQuantity(IfcNamedUnit unit,
				String name,
				String description) : base(name,
				description)
		{
			this.unitField = unit;
		}
	}
}