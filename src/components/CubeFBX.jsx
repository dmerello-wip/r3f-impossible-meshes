import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";

export default function Cube({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/models/GLTF4_FBX/Cube.gltf')


  useEffect(()=>{
    console.dir(materials);
    // materials['Material_001'].color = new THREE.Color('rgb(68, 119, 141)');
    // materials['Material_002'].color = new THREE.Color('rgb(55, 96, 112)');
    // materials['Material_003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, [materials]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[22.81, 9.48, -5.68]} rotation={[-0.68, 0.12, 0.82]} scale={[23.45, 23.45, 23.45]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-0.56, 0.59, -0.45]} scale={[0.88, 0.13, 0.13]}>
            <mesh
              geometry={nodes['3DGeom-1'].geometry}
              material={nodes['3DGeom-1'].material}
              position={[-0.1, -1.05, -0.5]}
              rotation={[0, -0.03, -0.03]}
              scale={[1.04, 1, 0.96]}
            />
          </group>
          <group position={[-10, 10, -10.15]} rotation={[1.03, 0.68, 1.93]} scale={[2.58, 3.71, 2.31]} />
          <group position={[-0.41, 0.01, -0.51]} rotation={[-Math.PI, 0, 0]} scale={[-0.88, 0.13, 0.13]}>
            <mesh
              geometry={nodes['3DGeom-4'].geometry}
              material={nodes['3DGeom-4'].material}
              position={[0.1, 1.06, 0.49]}
              rotation={[0, -0.03, -0.03]}
              scale={[1.04, 1, 0.96]}
            />
          </group>
        </group>
      </group>
      <group position={[21.66, 4.05, 3.62]}>
        <group rotation={[0.91, -0.75, 3.04]}>
          <group scale={[4.85, 4.85, 4.85]}>
            <group position={[-5.2, -4.2, -5]}>
              <mesh geometry={nodes.Cube003_1.geometry} material={materials.Material_001} />
              <mesh geometry={nodes.Cube003_2.geometry} material={materials.Material_002} />
              <mesh geometry={nodes.Cube003_3.geometry} material={materials.Material_003} />
            </group>
          </group>
        </group>
      </group>
      <group position={[25.76, 4.06, 10.23]}>
        <group rotation={[0.47, 0, -Math.PI / 4]}>
          <group scale={0.53}>
            <group position={[0, 0, -37.5]}>
              <mesh geometry={nodes.Box001_1.geometry} material={materials['Material #0']} />
              <mesh geometry={nodes.Box001_2.geometry} material={materials['Material #2']} />
              <mesh geometry={nodes.Box001_3.geometry} material={materials['Material #1']} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF4_FBX/Cube.gltf')
