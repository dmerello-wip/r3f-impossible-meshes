import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/store/store'

const Shader = (props) => {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    }
  });

  return (
    <>
    <mesh
        ref={meshRef}
        scale={hovered ? 1.1 : 1}
        onClick={() => {
            router.push(`/box`)
        }}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        {...props}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={'orange'} />
    </mesh>
    <directionalLight position={[5, 5, 5]} />
    <ambientLight />
    </>
  )
}

export default Shader
