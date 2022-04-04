import React, {useEffect, useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {MathUtils} from 'three'

export default function MetaObject({children, animationState}) {
  const objectRef = useRef();
  /* number of degrees you want to rotate maximum) */
  const degreeRotationLimit = 15;


  useFrame((state) => {
    /* Basic floating animation */
    const t = state.clock.getElapsedTime()
    objectRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

  });

  let mouseHandler = function (event) {
    // Getting mouse or touch coordinates
    let {pageX, pageY} = event.targetTouches ? event.targetTouches[0] : event;
    // set the "percentual" of mouse movement in relation to the degree rotation limit expected:
    let mousePercX = (pageX * degreeRotationLimit)/document.body.offsetWidth;
    let mousePercY = (pageY * degreeRotationLimit)/document.body.offsetHeight;
    // get the negative/positive amount in relation to window center
    let mousePosXFromCenterInDegrees = mousePercX - degreeRotationLimit/2;
    let mousePosYFromCenterInDegrees = mousePercY - degreeRotationLimit/2;
    // let's rotate now:
    objectRef.current.rotation.x = -MathUtils.degToRad(mousePosYFromCenterInDegrees);
    objectRef.current.rotation.y = -MathUtils.degToRad(mousePosXFromCenterInDegrees);
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseHandler);
  }, []);

  return (
    <group ref={objectRef}>
      {children}
    </group>
  )
}
