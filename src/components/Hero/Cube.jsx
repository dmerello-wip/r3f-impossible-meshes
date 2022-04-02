import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Cube({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/cube.gltf')

  return (
    <group ref={group} {...props} dispose={null}>>
      <group position={[0, 0, 0]} rotation={[0.47, -Math.PI / 4, 0]} scale={[0.42, 0.42, 0.42]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/cube.gltf')
