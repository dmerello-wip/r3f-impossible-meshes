import React, {useEffect, useState, useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {MathUtils, Vector3} from 'three'
import {Power2, gsap} from "gsap";
import DoubleTriangle from "@/components/Hero/DoubleTriangle";
import Triangle from "@/components/Hero/Triangle";
import Cube from "@/components/Hero/Cube";

export default function MetaObject({children, animationState, callBack, modelType}) {

  const objectRef = useRef();
  const touchIsStarted = useRef();
  const touchStartPos = useRef();
  const touchSpeed = useRef(0);
  const rotationForce = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [opacity, setOpacity] = useState(0);


  const forceDecellerationFactor = 0.8;
  const decellerationFactor = 0.05;

  /* ---------------------------------------------------------------------*/
  /* ------------------------- CONFIG ------------------------------------*/
  /* ---------------------------------------------------------------------*/

  /* number of degrees you want to rotate maximum) */
  const animationDegrees = 20;
  const animationSpeed = 0.8;

  /* ---------------------------------------------------------------------*/
  /* ----------------------- ANIMATIONS ----------------------------------*/
  /* ---------------------------------------------------------------------*/

  useFrame((state) => {
    /* Basic floating animation */
    const t = state.clock.getElapsedTime()
    objectRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

    // set the new position:
    rotationForce.current -= decellerationFactor * touchSpeed.current;
    // move DOM accordingly
    objectRef.current.rotation.y = rotationForce.current
    // decrement the force
    touchSpeed.current = touchSpeed.current * forceDecellerationFactor;
  });

  const animationIn = ()=> {
    let animationParams = {
      rotY: objectRef.current.rotation.y,
      opacity: 1
    };
    gsap.from(animationParams, animationSpeed, {
      rotY : MathUtils.degToRad(-animationDegrees),
      opacity: 0,
      ease: Power2.easeOut,
      onUpdate: () => {
        objectRef.current.rotation.y = animationParams.rotY;
        setOpacity(animationParams.opacity);
      }
    });
  };

  const animationOut = ()=> {
    let animationParams = {
      rotY: objectRef.current.rotation.y,
      opacity: 1
    };
    gsap.to(animationParams, animationSpeed, {
      rotY : MathUtils.degToRad(animationDegrees),
      opacity: 0,
      ease: Power2.easeIn,
      onUpdate: () => {
        objectRef.current.rotation.y = animationParams.rotY;
        setOpacity(animationParams.opacity);
      },
      onComplete: ()=>{
        objectRef.current.rotation.y = 0;
        callBack();
      }
    });
  };



  /* ---------------------------------------------------------------------*/
  /* ---------------------  SWYPE MANAGEMENT -----------------------------*/
  /* ---------------------------------------------------------------------*/

  const onPointerDown = (event) => {
    // start touch behavior
    touchIsStarted.current = true;
    touchStartPos.current = event.touches ? event.touches[0].clientX : event.clientX;
  };

  const onPointerMove = (event) => {
    if (!touchIsStarted.current) return;
    let newPosition = event.touches ? event.touches[0].clientX : event.clientX;
    let distance = touchStartPos.current - newPosition;
    touchSpeed.current = Math.round(distance);
    console.log(touchSpeed.current);
  };

  const onPointerUp = (event) => {
    touchIsStarted.current = false;
    console.log('onPointerUp');
  };
;
  /* ---------------------------------------------------------------------*/
  /* ---------------------  EFFECTS --------------------------------------*/
  /* ---------------------------------------------------------------------*/

  /* ---- Trig animation state -------------------------------------------*/

  useEffect(() => {
    const animation = (animationState==='in') ? animationIn : animationOut;
    animation();
    // window.addEventListener('mousemove', mouseHandler);
  }, [animationState]);

  /* ---- Trig hover state -----------------------------------------------*/

  useEffect(() => {
    document.body.style.cursor = hovered ? 'all-scroll' : 'auto';
  }, [hovered]);

  /* ---------------------------------------------------------------------*/
  /* ---------------------  RENDER ---------------------------------------*/
  /* ---------------------------------------------------------------------*/


  return (
    <group ref={objectRef}
           onPointerOver={() => setHovered(true)}
           onPointerOut={() => {
             setHovered(false);
             onPointerUp();
           }}
           onPointerDown={onPointerDown}
           onPointerUp={onPointerUp}
           onPointerMove={onPointerMove}
    >
      {(modelType==='DoubleTriangle') && <DoubleTriangle emissivity={opacity}/>}
      {(modelType==='Triangle') && <Triangle emissivity={opacity}/>}
      {(modelType==='Cube') && <Cube emissivity={opacity}/>}
    </group>
  )
}
