/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcStructuralLoadSingleForceWarping : IfcStructuralLoadSingleForce 
	{
		public IfcStructuralLoadSingleForceWarping(Double warpingMoment,
				Boolean warpingMomentSpecified,
				Double forceX,
				Boolean forceXSpecified,
				Double forceY,
				Boolean forceYSpecified,
				Double forceZ,
				Boolean forceZSpecified,
				Double momentX,
				Boolean momentXSpecified,
				Double momentY,
				Boolean momentYSpecified,
				Double momentZ,
				Boolean momentZSpecified,
				String name) : base(forceX,
				forceXSpecified,
				forceY,
				forceYSpecified,
				forceZ,
				forceZSpecified,
				momentX,
				momentXSpecified,
				momentY,
				momentYSpecified,
				momentZ,
				momentZSpecified,
				name)
		{
			this.warpingMomentField = warpingMoment;
			this.warpingMomentSpecifiedField = warpingMomentSpecified;
		}
	}
}