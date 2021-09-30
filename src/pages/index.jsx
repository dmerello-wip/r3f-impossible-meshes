import dynamic from 'next/dynamic'
const Box = dynamic(() => import('@/components/canvas/Box'))
const Value = dynamic(() => import('@/components/dom/Value'))

const DOM = () => {
  return (
      <>
          <Value/>
      </>
  )
}

const R3F = () => {
  return (
    <>
      <Box color="green" />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}

