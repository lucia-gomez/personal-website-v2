/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { MeshPhysicalMaterial } from "three"
import React from "react"
import { useGLTF } from "@react-three/drei"

export default function BallonDogModel(props) {
  const { nodes } = useGLTF(
    "https://ik.imagekit.io/5xtlzx2c3y/website/art/3d/meshes/balloonDog.glb?updatedAt=1693803902541"
  )
  const balloonMaterial = new MeshPhysicalMaterial({
    color: "#2471ed",
    transmission: 1,
    transparent: true,
    roughness: 0,
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_1.geometry}
        material={balloonMaterial}
        position={[0, 0, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_2.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_3.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_4.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_5.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_6.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_7.geometry}
        material={balloonMaterial}
        position={[-0.007, 0.058, 0.479]}
        rotation={[1.569, -0.001, 0.001]}
        scale={0.271}
      />
    </group>
  )
}
