import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrthographicCamera, OrbitControls, Preload, Plane, ContactShadows} from '@react-three/drei'
import * as THREE from 'three';

const Scene = ({ children , orbitControlActive}) => {
  const cameraRef = useRef();

  //TODO: create a plane, add light, rotate camera and metaObject accordingly to mantain the perspective effect
  return (
        <Canvas mode='concurrent' shadowMap >
          {orbitControlActive && <OrbitControls camera={cameraRef.current} /> }
          <OrthographicCamera castShadow
            zoom={90}
            position={[0,0,80]}
            makeDefault={true}
            ref={cameraRef}
          />
          <Preload all />
            {children}
        </Canvas>
  )
}

export default Scene
