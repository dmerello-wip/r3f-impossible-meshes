import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrthographicCamera, OrbitControls, Preload, Point} from '@react-three/drei'

const Scene = ({ children , orbitControlActive}) => {
  const cameraRef = useRef();
  return (
        <Canvas mode='concurrent' >
          {orbitControlActive && <OrbitControls camera={cameraRef.current} /> }
          {/*<pointLight color="white" intensity={10} position={[0, 10, 30]} />*/}
          <OrthographicCamera castShadow
            zoom={90}
            position={[0,0,80]}
            makeDefault={true}
            frustumCulled = {false}
            ref={cameraRef}
          />
          <Preload all />
            {children}
        </Canvas>
  )
}

export default Scene
