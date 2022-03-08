import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF_triangle_automaticlight/triangle.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={10000} fov={2.55} position={[2.41, 0.35, 126.43]} />
      <group position={[0.36, 0.5, -0.4]} rotation={[-2.5, 0.82, 3.11]} scale={[4.85, 4.85, 4.85]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF_triangle_automaticlight/triangle.gltf')
