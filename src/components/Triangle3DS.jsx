import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF4_3DS/Triangle.gltf')

  useEffect(()=>{
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,0,0]} rotation={[-0.6, 0.75, 1.54]} scale={[1.04, 1.04, 1.04]}>
        <mesh geometry={nodes.Box001_1.geometry} >
          <meshBasicMaterial color="rgb(68, 119, 141)" />
        </mesh>
        <mesh geometry={nodes.Box001_2.geometry} >
          <meshBasicMaterial color="rgb(55, 96, 112)" />
        </mesh>
        <mesh geometry={nodes.Box001_3.geometry} >
          <meshBasicMaterial color="rgb(42, 70, 112)" />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF4_3DS/Triangle.gltf')
