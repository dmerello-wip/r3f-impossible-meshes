import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero'))

const Page = () => {
  return (
    <>
      <Hero title="prima slide c"></Hero>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'adesso siamo in home',
    },
  }
}

