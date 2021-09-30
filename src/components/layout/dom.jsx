import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])
  return (
    <div
      className='dom-wrapper'
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Dom
