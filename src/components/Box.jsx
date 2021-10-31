import useStore from '@/store/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const BoxComponent = ({ color }) => {
  const router = useStore((s) => s.router)
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )
  return (
    <>
      <mesh
        ref={mesh}
        onClick={() => router.push('fava')}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}
export default BoxComponent
