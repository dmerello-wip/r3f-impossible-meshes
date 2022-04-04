import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrthographicCamera, OrbitControls, Preload, Plane, ContactShadows} from '@react-three/drei'

const Scene = ({ children , orbitControlActive}) => {
  const cameraRef = useRef();

  return (
        <Canvas mode='concurrent' shadowMap >
          {orbitControlActive && <OrbitControls camera={cameraRef.current} /> }
          {/*<pointLight color="white" intensity={2} position={[0, 10, 30]} />*/}
          <OrthographicCamera castShadow
            zoom={90}
            position={[0,0,80]}
            makeDefault={true}
            frustumCulled = {false}
            ref={cameraRef}
          />
          <Preload all />
            {children}
            {/*<spotLight  castShadow intensity={0.4} angle={0.2} penumbra={1} position={[0, 0, 50]} castShadow />*/}
            {/*<ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />*/}
            {/*<Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} args={[1000, 1000]} >*/}
            {/*  <meshStandardMaterial attach="material" color="white" />*/}
            {/*</Plane>*/}
        </Canvas>
  )
}

export default Scene
