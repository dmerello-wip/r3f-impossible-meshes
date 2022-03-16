import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF5_3DS/Triangle.gltf')

  useEffect(()=>{
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={true} far={10000} fov={2.55} position={[2.3, 0.33, 126.43]} />
      <group position={[0.5, 0.5, -0.4]} rotation={[-2.5, 0.8, 3.11]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_1.geometry} >
          <meshBasicMaterial color="rgb(68, 119, 141)" />
        </mesh>
        <mesh geometry={nodes.Triangle_2.geometry} >
          <meshBasicMaterial color="rgb(55, 96, 112)" />
        </mesh>
        <mesh geometry={nodes.Triangle_3.geometry} >
          <meshBasicMaterial color="rgb(42, 70, 112)" />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF5_3DS/Triangle.gltf')
