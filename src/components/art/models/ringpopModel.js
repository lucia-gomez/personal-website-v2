/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { MeshPhysicalMaterial } from "three"
import React from "react"
import { useGLTF } from "@react-three/drei"

export default function RingpopModel(props) {
  const { nodes, materials } = useGLTF(
    "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/ringpop.glb?updatedAt=1693796959817"
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_0.geometry}
        material={materials.model_0}
        position={[0, 0, 16.823]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_1.geometry}
        material={
          new MeshPhysicalMaterial({
            color: "#f22f59",
            metalness: 0.3,
            roughness: 0,
            transmission: 0.7,
            thickness: 0.5,
            transparent: true,
          })
        }
        position={[0, 0, 16.823]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
