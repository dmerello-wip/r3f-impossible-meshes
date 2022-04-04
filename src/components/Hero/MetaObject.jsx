import React, {useEffect, useState, useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {MathUtils, Vector3} from 'three'
import {Power2, gsap} from "gsap";

export default function MetaObject({children, animationState, callBack}) {
  const objectRef = useRef();
  const [hovered, setHovered] = useState(false)

  /* number of degrees you want to rotate maximum) */
  const degreeRotationLimit = 180;
  const animationSpeed = 0.8;


  useFrame((state) => {
    /* Basic floating animation */
    const t = state.clock.getElapsedTime()
    objectRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

  });

  // let mouseHandler = function (event) {
  //   // Getting mouse or touch coordinates
  //   let {pageX, pageY} = event.targetTouches ? event.targetTouches[0] : event;
  //   // set the "percentual" of mouse movement in relation to the degree rotation limit expected:
  //   let mousePercX = (pageX * degreeRotationLimit)/document.body.offsetWidth;
  //   let mousePercY = (pageY * degreeRotationLimit)/document.body.offsetHeight;
  //   // get the negative/positive amount in relation to window center
  //   let mousePosXFromCenterInDegrees = mousePercX - degreeRotationLimit/2;
  //   let mousePosYFromCenterInDegrees = mousePercY - degreeRotationLimit/2;
  //   // let's rotate now:
  //   objectRef.current.rotation.x = -MathUtils.degToRad(mousePosYFromCenterInDegrees);
  //   objectRef.current.rotation.y = -MathUtils.degToRad(mousePosXFromCenterInDegrees);
  // }

  const animationIn = ()=> {
    let animationParams = {
      rotY: objectRef.current.rotation.y
    };
    gsap.from(animationParams, animationSpeed, {
      rotY : MathUtils.degToRad(-degreeRotationLimit),
      ease: Power2.easeOut,
      onUpdate: () => {
        objectRef.current.rotation.y = animationParams.rotY;
      }
    });
  };

  const animationOut = ()=> {
    let animationParams = {
      rotY: objectRef.current.rotation.y
    };
    gsap.to(animationParams, animationSpeed, {
      rotY : MathUtils.degToRad(degreeRotationLimit),
      ease: Power2.easeIn,
      onUpdate: () => {
        objectRef.current.rotation.y = animationParams.rotY;
      },
      onComplete: ()=>{
        objectRef.current.rotation.y = 0;
        callBack();
      }
    });
  };


  useEffect(() => {
    const animation = (animationState==='in') ? animationIn : animationOut;
    animation();
    // window.addEventListener('mousemove', mouseHandler);
  }, [animationState]);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'all-scroll' : 'auto';
  }, [hovered]);




  return (
    <group ref={objectRef}
           onPointerOver={() => setHovered(true)}
           onPointerOut={() => setHovered(false)}
    >
      {children}
    </group>
  )
}
