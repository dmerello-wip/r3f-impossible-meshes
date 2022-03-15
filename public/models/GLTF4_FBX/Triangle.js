/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Triangle.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.63, 0.49, 3.81]} rotation={[0.63, -0.83, 1.6]} scale={[0.1, 0.1, 0.1]}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/Triangle.gltf')
