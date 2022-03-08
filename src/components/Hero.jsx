import LCanvas from '@/components/LCanvas'
import DoubleTriangle from '@/components/DoubleTriangle'
import Triangle from '@/components/Triangle'
// import Triangle from '@/components/TriangleAutomaticLight'
// import Triangle from '@/components/TriangleNoAutomaticLight'
// import Cube from '@/components/Cube'
// import Cube from '@/components/CubeAutomaticLight'
// import Cube from '@/components/CubeNoAutomaticLight'
import { useEffect, useRef } from 'react'
import useStore from '@/store/store'

export default function Hero({ title }) {
  const ref = useRef()
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])
  return (
    <div className='c-hero' ref={ref}>
    <div className='c-hero__canvas'>
      <LCanvas orbitControlActive>
        {/*<DoubleTriangle/>*/}
        <Triangle />
        {/*<Cube />*/}
        <directionalLight position={[5, 5, 5]} />
        <ambientLight />
      </LCanvas>
    </div>
      <div className='c-hero__content'>
        <div className='c-hero__title'>{title}</div>
        <div className='c-hero__description'>
          <ul>
            <li>bla dasd</li>
            <li>bla dasd</li>
            <li>bla dasd</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
