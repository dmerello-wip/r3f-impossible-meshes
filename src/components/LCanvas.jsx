import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/store/store'

const LCanvas = ({ children , orbitControlActive, cameraPosition}) => {
  const dom = useStore((state) => state.dom)
  const cameraRef = useRef();
  return (
        <Canvas
            mode='concurrent'
            onCreated={(state) => state.events.connect(dom.current)}
        >
          {orbitControlActive && <OrbitControls camera={cameraRef.current} /> }
          <PerspectiveCamera castShadow
            position={[0,50,0]}
            makeDefault={true}
            ref={cameraRef}
          />
          <Preload all />
            {children}
        </Canvas>
  )
}

export default LCanvas
