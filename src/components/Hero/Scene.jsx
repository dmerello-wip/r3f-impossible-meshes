import { useRef } from 'react'
import { Canvas, useFrame, doubleSide } from '@react-three/fiber'
import {OrthographicCamera, OrbitControls, Preload, Plane, ContactShadows} from '@react-three/drei'
import MetaObject from "@/components/Hero/MetaObject";

const Scene = ({ animationState, callBack, modelType }) => {
  const cameraRef = useRef();

  const cameraDistance = 80;
  const cameraRotation = 0.08;

  return (
        <Canvas mode='concurrent' shadowMap >
          {/*<OrbitControls*/}
          {/*  camera={cameraRef.current}*/}
          {/*/>*/}
          <OrthographicCamera
            castShadow
            zoom={90}
            rotation={[-cameraRotation,0,0]}
            position={[0,cameraDistance * Math.tan(cameraRotation),cameraDistance]}
            makeDefault={true}
            ref={cameraRef}
          />
          <MetaObject
            animationState={animationState}
            callBack={callBack}
            modelType={modelType}
            rotationX={cameraRotation}
          />
          {/*<Plane receiveShadow args={[100,100]} position={[0,-3,-2]} rotation={[-Math.PI/2,0,0]}>*/}
          {/*  <meshBasicMaterial color="green"  />*/}
          {/*</Plane>*/}
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -2.9, 0]} opacity={1} width={50} height={50} blur={1} far={20} />
          <Preload all />
        </Canvas>
  )
}

export default Scene
