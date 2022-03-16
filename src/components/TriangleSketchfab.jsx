import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/sketchfab_triangle/scene.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.06, -0.06, 0]} rotation={[-Math.PI / 2, -0.01, 0]} scale={[0.13, 0.13, 0.13]}>
        <group position={[-1, -1, -1]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['Material.003']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sketchfab_triangle/scene.gltf')
