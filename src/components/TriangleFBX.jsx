import React, {useEffect, useRef, setState} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import * as THREE from "three";
import { useControls } from 'leva'

export default function Triangle({ ...props }) {

  const group = useRef()
  const { nodes } = useGLTF('/models/GLTF4_FBX/Triangle.gltf')
  const { rotX, rotY, rotZ } = useControls({ rotX: 0.41, rotY: 0.38, rotZ: 1.6});

  return (
    <group ref={group} {...props} dispose={null}
           rotation={[
             THREE.Math.degToRad(rotX),
             THREE.Math.degToRad(rotY),
             THREE.Math.degToRad(rotZ),
           ]}>
      <group position={[0.63, 0.49, 3.81]} rotation={[0.63, -0.83, 1.6]} scale={[0.1, 0.1, 0.1]}>
        <mesh geometry={nodes.Mesh.geometry}>
          <meshBasicMaterial color="rgb(68, 119, 141)" />
        </mesh>
        <mesh geometry={nodes.Mesh_1.geometry}>
          <meshBasicMaterial color="rgb(55, 96, 112)" />
        </mesh>
        <mesh geometry={nodes.Mesh_2.geometry}>
          <meshBasicMaterial color="rgb(42, 70, 112)" />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/GLTF4_FBX/Triangle.gltf')
