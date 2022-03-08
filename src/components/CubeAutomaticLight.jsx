import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Cube({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF_cube_automaticlight/cube.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[2.28, -0.57, -0.95]} rotation={[-0.55, 0.82, -0.17]} scale={[23.45, 23.45, 23.45]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-0.06, -0.05, -0.06]} scale={[0.88, 0.13, 0.13]} />
          <group position={[-1, -1.01, -1]} rotation={[-Math.PI, 0.82, -1.98]} scale={[2.58, 2.31, 3.71]} />
          <group position={[-0.04, -0.05, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.88, -0.13, 0.13]} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={10000} fov={3.03} position={[3.21, 1.06, 126.43]} />
      <group position={[2.58, 1.02, -0.41]} rotation={[0.47, -Math.PI / 4, 0]} scale={0.53}>
        <mesh geometry={nodes.Box001_1.geometry} material={materials['Material #2']} />
        <mesh geometry={nodes.Box001_2.geometry} material={materials['Material #1']} />
        <mesh geometry={nodes.Box001_3.geometry} material={materials['Material #0']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF_cube_automaticlight/cube.gltf')
