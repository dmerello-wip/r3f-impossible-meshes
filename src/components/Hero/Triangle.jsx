import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({...props}) {

  const group = useRef()
  const {nodes, materials} = useGLTF('/models/triangle.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, -3.4]}>
        <group position={[-1.4, 0, 0]} rotation={[-2.533, 0.840, 3.15]} scale={[4.8, 4.8, 4.8]}>
          <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001}/>
          <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002}/>
          <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003}/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/triangle.gltf')
