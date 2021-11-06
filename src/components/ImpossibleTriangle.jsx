// const ImpossibleTriangle = ({ color }) => {
//   const mesh = useRef(null)
//   const [hovered, setHover] = useState(false)
//   useFrame((state, delta) =>
//     mesh.current
//       ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
//       : null
//   )
//   return (
//     <>
//       <mesh
//         ref={mesh}
//         onClick={() => router.push('fava')}
//         onPointerOver={() => setHover(true)}
//         onPointerOut={() => setHover(false)}
//         scale={hovered ? 1.1 : 1}
//       >
//         <boxBufferGeometry args={[1, 1, 1]} />
//         <meshPhysicalMaterial color={color} />
//       </mesh>
//     </>
//   )
// }
// export default ImpossibleTriangle


import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function ImpossibleTriangle({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/triangle.gltf')
  return (
      // <group rotation={[-Math.PI, 0, -Math.PI]} position={[0, 0, 0]} ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]} ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials['Material.003']} />
      </group>
  )
}

useGLTF.preload('/models/triangle.gltf')
