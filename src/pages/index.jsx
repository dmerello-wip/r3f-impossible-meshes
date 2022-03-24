import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/Hero/Index'))

const Page = ({heroContents}) => {
  return (
    <>
      <Hero contents={heroContents}></Hero>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      heroContents: [
        {
          model: 'DoubleTriangle',
          pretitle: 'Crediamo nella',
          title: 'relazione',
          subtitle: 'perché amiamo dare valore alla singolarità.',
          paragraph: '<p>Sappiamo sentire le tue esigenze perché ci immergiamo nei tuoi processi.</p><p>Creiamo soluzioni specifiche partendo dalle tue ragioni e condividendo i tuoi obiettivi.</p>'
        },
        {
          model: 'Cube',
          pretitle: 'Liberiamo il tuo',
          title: 'potenziale',
          subtitle: 'perché amiamo mettere ordine.',
          paragraph: '<p>Sappiamo risolvere i dubbi perché facciamo chiarezza nella complessità.</p><p>Mettiamo ordine perché amiamo capire. E capire significa sempre potere.</p>'
        },
        {
          model: 'Triangle',
          pretitle: 'Operiamo con',
          title: 'pragmatismo',
          subtitle: 'perché amiamo i risultati.',
          paragraph: '<p>Sappiamo aiutarti a prendere le decisioni che contano indicando le azioni che contano.</p><p>E le facciamo con te, sviluppando progetti concreti e adattabili al cambiamento continuo dei contesti. </p>'
        }
      ]
    }
  }
}

