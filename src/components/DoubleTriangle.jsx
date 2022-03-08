import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function DoubleTriangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/double_triangle.gltf')


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
      <group position={[0.36, 0.5, -0.4]} rotation={[-2.5, 0.82, 3.11]} scale={[4.85, 4.85, 4.85]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material #7']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material #6']} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Material #4']} />
      </group>
      <group position={[5.41, 1.69, -0.4]} rotation={[2.5, -0.82, -0.03]} scale={4.85}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material #2']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material #1']} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials['Material #0']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/double_triangle.gltf')
