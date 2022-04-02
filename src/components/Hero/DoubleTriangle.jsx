import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function DoubleTriangle({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/triangle.gltf');
  const m = useGLTF('/models/triangle.gltf');
  console.log(m.materials.Material_001);

  useEffect(()=>{
    materials.Material_001.emissive = new THREE.Color('rgb(203, 112, 79)');
    materials.Material_002.emissive = new THREE.Color('rgb(154,75,45)');
    materials.Material_003.emissive = new THREE.Color('rgb(70,45,27)');
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.5, 0.5, -0.4]} rotation={[-2.5, 0.8, 3.11]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003} />
      </group>
      <group position={[5.41, 1.79, -0.27]} rotation={[2.53, -0.8, -0.01]} scale={[4.86, 4.86, 4.86]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/triangle.gltf')
