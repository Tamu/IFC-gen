/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcConnectionVolumeGeometry : IfcConnectionGeometry 
	{
		public IfcConnectionVolumeGeometry(IfcConnectionVolumeGeometryVolumeOnRelatingElement volumeOnRelatingElement,
				IfcConnectionVolumeGeometryVolumeOnRelatedElement volumeOnRelatedElement) : base()
		{
			this.volumeOnRelatingElementField = volumeOnRelatingElement;
			this.volumeOnRelatedElementField = volumeOnRelatedElement;
		}
	}
}