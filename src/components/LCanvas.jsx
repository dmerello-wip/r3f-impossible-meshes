import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/store/store'

const LCanvas = ({ children , orbitControlActive}) => {
  const dom = useStore((state) => state.dom)
  return (
      <div className="canvas-wrapper">
        <Canvas
            mode='concurrent'
            onCreated={(state) => state.events.connect(dom.current)}
        >
          {orbitControlActive && <OrbitControls /> }
          <Preload all />
            {children}
        </Canvas>
      </div>
  )
}

export default LCanvas
