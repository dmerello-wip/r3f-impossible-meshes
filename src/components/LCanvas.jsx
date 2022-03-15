import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrthographicCamera, OrbitControls, Preload, Point} from '@react-three/drei'
import useStore from '@/store/store'

const LCanvas = ({ children , orbitControlActive, cameraPosition}) => {
  const dom = useStore((state) => state.dom)
  const cameraRef = useRef();
  return (
        <Canvas
            mode='concurrent'
            // onCreated={(state) => state.events.connect(dom.current)}
        >
          {orbitControlActive && <OrbitControls camera={cameraRef.current} /> }
          {/*<pointLight color="white" intensity={10} position={[0, 10, 30]} />*/}
          <OrthographicCamera castShadow
            zoom={60}
            position={[0,0,30]}
            makeDefault={true}
            frustumCulled = {false}
            ref={cameraRef}
          />

          <Preload all />
            {children}
        </Canvas>
  )
}

export default LCanvas
