import React, {useEffect, useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import * as THREE from "three";
import { useControls, folder } from 'leva';

export default function DoubleTriangle({ emissivity }) {

  const { nodes, materials } = useGLTF('/models/triangle.gltf');
  // set of Triangles positions tested with Leva controller
  const t1 = {
      t1_x: -2.504,
      t1_y: 0.82,
      t1_z: 3.11
    };
  const t2 = {
      t2_x: 2.50,
      t2_y: -0.82,
      t2_z: -0.035
    };

  // leva controls to test:
  // const { t1_x, t1_y, t1_z , t2_x, t2_y, t2_z } = useControls({
  //   triangle_1 : folder(t1),
  //   triangle_2 : folder(t2),
  // });

  useEffect(()=>{
    materials.Material_001.color = new THREE.Color('rgb(203, 112, 79)');
    materials.Material_002.color = new THREE.Color('rgb(154,75,45)');
    materials.Material_003.color = new THREE.Color('rgb(70,45,27)');
    materials.Material_001.emissive = materials.Material_001.color;
    materials.Material_002.emissive = materials.Material_002.color;
    materials.Material_003.emissive = materials.Material_003.color;
  }, []);

  useEffect(()=>{
    materials.Material_001.emissiveIntensity = emissivity;
    materials.Material_002.emissiveIntensity = emissivity;
    materials.Material_003.emissiveIntensity = emissivity;
  }, [emissivity]);


  return (
    <group  dispose={null}>
      {/* remove t1. from rotation params to test positions with Leva control */}
      <group position={[-1.6, 0, 0]} rotation={[t1.t1_x, t1.t1_y, t1.t1_z]} scale={[3.6, 3.6, 3.6]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003} />
      </group>
      {/* remove t2. from rotation params to test positions with Leva control */}
      <group position={[1.8, 1.2, 0]} rotation={[t2.t2_x, t2.t2_y, t2.t2_z]} scale={[3.6, 3.6, 3.6]}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Material_001} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials.Material_002} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials.Material_003} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/triangle.gltf')
