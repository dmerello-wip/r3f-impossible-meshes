import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap, Power2 } from "gsap";
// import { useControls } from 'leva'

export default function ImpossibleTriangle({ ...props }) {

  const obj = useRef()
  const finalRotation = { x: 125.30, y: 180, z: -44.9 }
  const { nodes, materials } = useGLTF('/models/triangle.gltf')
  // const { rotX, rotY, rotZ } = useControls({
  //   rotX: finalRotation.x,
  //   rotY: finalRotation.y,
  //   rotZ: finalRotation.z,
  // })

  const startAnimation = (animationType)=> {
    let animationParams = {
      x: finalRotation.x,
      z: finalRotation.z
    };
    gsap.from(animationParams, {
      x : 180,
      z : -70,
      duration: 2,
      ease: Power2.easeOut,
      onUpdate: () => {
        obj.current.rotation.x = THREE.Math.degToRad(animationParams.x);
        obj.current.rotation.z = THREE.Math.degToRad(animationParams.z);
      }
    });
  };


  useEffect(()=>{
    startAnimation();
  }, []);



  return (
    <group
      position={[5,-5,0]}
      rotation={[
        THREE.Math.degToRad(finalRotation.x),
        THREE.Math.degToRad(finalRotation.y),
        THREE.Math.degToRad(finalRotation.z),
      ]}
      ref={obj}
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
