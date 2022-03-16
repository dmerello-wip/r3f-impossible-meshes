/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/triangle.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={10000} fov={2.55} position={[2.3, 0.33, 126.43]} />
      <group position={[0.5, 0.5, -0.4]} rotation={[-2.5, 0.8, 3.11]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/triangle.gltf')
