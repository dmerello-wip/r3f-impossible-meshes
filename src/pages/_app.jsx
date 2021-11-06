import { useRouter } from 'next/router'
import useStore from '@/store/store'
import { useEffect, Children } from 'react'
import Head from '@/components/Head'
import "../scss/main.scss";

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()
  useEffect(() => {
    useStore.setState({ router })
  }, [router])
  return (
    <>
      <Head title={pageProps.title} />
      <Component {...pageProps} />
    </>
  )
}

export default App