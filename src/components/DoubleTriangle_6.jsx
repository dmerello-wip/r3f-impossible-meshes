import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function DoubleTriangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF6/doubletriangle.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={10000} fov={3.85} position={[2.3, 0.33, 126.43]} />
      <group position={[0.5, 0.5, -0.4]} rotation={[-2.5, 0.8, 3.11]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={nodes.Triangle_1.material} />
        <mesh geometry={nodes.Triangle_3.geometry} material={nodes.Triangle_3.material} />
        <mesh geometry={nodes.Triangle_4.geometry} material={nodes.Triangle_4.material} />
      </group>
      <group position={[5.41, 1.79, -0.27]} rotation={[2.53, -0.8, -0.01]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_2_1.geometry} material={nodes.Triangle_2_1.material} />
        <mesh geometry={nodes.Triangle_2_2.geometry} material={nodes.Triangle_2_2.material} />
        <mesh geometry={nodes.Triangle_2_3.geometry} material={nodes.Triangle_2_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF6/doubletriangle.gltf')
