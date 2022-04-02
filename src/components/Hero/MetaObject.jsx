import React, {useRef} from 'react'
import { useFrame } from "@react-three/fiber"

export default function MetaObject({children, animation}) {
  const objectRef = useRef();
  // Animate object
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    objectRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  });

  return (
    <group ref={objectRef}>
      {children}
    </group>
  )
}
