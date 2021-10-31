import { useRouter } from 'next/router'
import useStore from '@/store/store'
import { useEffect, Children } from 'react'
import Header from '@/components/Head'

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()
  useEffect(() => {
    useStore.setState({ router })
  }, [router])
  return (
    <>
      <Header title={pageProps.title} />
      <Component {...pageProps} />
    </>
  )
}

export default App