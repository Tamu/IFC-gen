/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcStructuralLoadLinearForce : IfcStructuralLoadStatic 
	{
		public IfcStructuralLoadLinearForce(Double linearForceX,
				Boolean linearForceXSpecified,
				Double linearForceY,
				Boolean linearForceYSpecified,
				Double linearForceZ,
				Boolean linearForceZSpecified,
				Double linearMomentX,
				Boolean linearMomentXSpecified,
				Double linearMomentY,
				Boolean linearMomentYSpecified,
				Double linearMomentZ,
				Boolean linearMomentZSpecified,
				String name) : base(name)
		{
			this.linearForceXField = linearForceX;
			this.linearForceXSpecifiedField = linearForceXSpecified;
			this.linearForceYField = linearForceY;
			this.linearForceYSpecifiedField = linearForceYSpecified;
			this.linearForceZField = linearForceZ;
			this.linearForceZSpecifiedField = linearForceZSpecified;
			this.linearMomentXField = linearMomentX;
			this.linearMomentXSpecifiedField = linearMomentXSpecified;
			this.linearMomentYField = linearMomentY;
			this.linearMomentYSpecifiedField = linearMomentYSpecified;
			this.linearMomentZField = linearMomentZ;
			this.linearMomentZSpecifiedField = linearMomentZSpecified;
		}
	}
}