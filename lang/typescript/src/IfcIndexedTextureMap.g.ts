
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcTextureVertexList} from "./IfcTextureVertexList.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD2/HTML/link/ifcindexedtexturemap.htm
 */
export abstract class IfcIndexedTextureMap extends IfcTextureCoordinate {
	MappedTo : IfcTessellatedFaceSet
	TexCoords : IfcTextureVertexList

    constructor(maps : Array<IfcSurfaceTexture>, mappedTo : IfcTessellatedFaceSet, texCoords : IfcTextureVertexList) {
        super(maps)
		this.MappedTo = mappedTo
		this.TexCoords = texCoords

    }
}