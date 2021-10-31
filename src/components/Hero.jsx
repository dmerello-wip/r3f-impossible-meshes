import LCanvas from '@/components/LCanvas'
import Box from '@/components/Box'
import { useEffect, useRef } from 'react'
import useStore from '@/store/store'

export default function Hero({title}) {
  const ref = useRef();
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])
  return (
    <div className='hero' ref={ref}>
      <div className="hero__title">{title}</div>
      <div className="hero_content">
        bla dasd
      </div>
      <LCanvas orbitControlActive>
        <Box color="red"></Box>
      </LCanvas>
    </div>
  )
}
