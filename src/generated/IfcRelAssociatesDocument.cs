/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcRelAssociatesDocument : IfcRelAssociates 
	{
		public IfcRelAssociatesDocument(IfcRelAssociatesDocumentRelatingDocument relatingDocument,
				IfcRelAssociatesRelatedObjects relatedObjects) : base(relatedObjects)
		{
			this.relatingDocumentField = relatingDocument;
		}
	}
}