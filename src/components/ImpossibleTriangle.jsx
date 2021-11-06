import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { gsap, Power4 } from "gsap";
// import { useControls } from 'leva'

export default function ImpossibleTriangle({ ...props }) {

  const obj = useRef()
  const initialPosition = { x: -20, y: null, z: null }
  const initialRotation = { x: 180, y: 340, z: -70 }
  const finalRotation = { x: 125.30, y: 180, z: -44.9 }
  const finalPosition = { x: 5, y: -5, z: 0 }
  const { nodes, materials } = useGLTF('/models/triangle.gltf')
  
  // const { rotX, rotY, rotZ } = useControls({ rotX: finalRotation.x, rotY: finalRotation.y, rotZ: finalRotation.z});

  const startAnimation = (animationType)=> {
    let animationParams = {
      rotX: finalRotation.x,
      rotY: finalRotation.y,
      rotZ: finalRotation.z,
      posX: finalPosition.x,
    };
    gsap.from(animationParams, {
      rotX : initialRotation.x,
      rotY : initialRotation.y,
      rotZ : initialRotation.z,
      posX : initialPosition.x,
      duration: 2,
      ease: Power4.easeOut,
      onUpdate: () => {
        obj.current.rotation.x = THREE.Math.degToRad(animationParams.rotX);
        obj.current.rotation.y = THREE.Math.degToRad(animationParams.rotY);
        obj.current.rotation.z = THREE.Math.degToRad(animationParams.rotZ);
        obj.current.position.x = animationParams.posX;
      }
    });
  };


  useEffect(()=>{
    startAnimation();
    materials['Material.001'].color = new THREE.Color('rgb(68, 119, 141)');
    materials['Material.002'].color = new THREE.Color('rgb(55, 96, 112)');
    materials['Material.003'].color = new THREE.Color('rgb(42, 70, 112)');
  }, []);



  return (
    <group
      position={[finalPosition.x, finalPosition.y, finalPosition.z]}
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
