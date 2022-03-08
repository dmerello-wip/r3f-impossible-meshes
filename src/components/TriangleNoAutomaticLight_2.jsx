import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF_triangle_noautomaticlight_2/triangle.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={true} far={10000} fov={2.55} position={[2.41, 0.35, 126.43]} />
      <group position={[0.32, 0.5, -0.4]} rotation={[0.64, -0.82, 1.6]} scale={[1.04, 1.04, 1.04]}>
        <mesh geometry={nodes.Box001_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Box001_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Box001_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF_triangle_noautomaticlight_2/triangle.gltf')
