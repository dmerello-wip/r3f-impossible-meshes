import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export default function ImpossibleTriangle({ ...props }) {
  const group = useRef()
  const finalRotation = { x: 125.30, y: 180, z: -44.9 }
  const { nodes, materials } = useGLTF('/models/triangle.gltf')
  const { rotX, rotY, rotZ } = useControls({
    rotX: finalRotation.x,
    rotY: finalRotation.y,
    rotZ: finalRotation.z,
  })

  return (
    <group
    position={[5,-5,0]}
      rotation={[
        THREE.Math.degToRad(rotX),
        THREE.Math.degToRad(rotY),
        THREE.Math.degToRad(rotZ),
      ]}
      ref={group}
      {...props}
      dispose={null}
      scale={[1, 1, 1]}
    >
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={materials['Material.001']}
      />
      <mesh
        geometry={nodes.mesh_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        geometry={nodes.mesh_2.geometry}
        material={materials['Material.003']}
      />
    </group>
  )
}

useGLTF.preload('/models/triangle.gltf')
