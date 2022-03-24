import Scene from './Scene'
import Triangle from './Triangle'
import DoubleTriangle from './DoubleTriangle'
import Cube from './Cube'
import {useState} from "react";

export default function Hero({contents}) {

  const slidesData = contents.map((elem,i)=> {
    elem.index = i+1;
    return elem;
  });

  const [slideData, setSlideData] = useState(slidesData[0]);
  const [animationState, setAnimationState] = useState('in'); // values: out, in

  const changeHandler = (nextSlideIndex)=>{
    // animate out
  };

  return (
    <div className='c-hero'>
    <div className='c-hero__canvas'>
      <Scene orbitControlActive>
        {(slideData.model==='DoubleTriangle') && <DoubleTriangle animationState={animationState} />}
        {(slideData.model==='Triangle') && <Triangle animationState={animationState} />}
        {(slideData.model==='Cube') && <Cube animationState={animationState} />}
      </Scene>
    </div>
      <div className='c-hero__content' data-animation={animationState}>
        <div className="c-hero__index">{slideData.index}</div>
        <div className='c-hero__pretitle'>{slideData.pretitle}</div>
        <div className='c-hero__title'>{slideData.title}</div>
        <div className='c-hero__subtitle'>{slideData.subtitle}</div>
        <div className='c-hero__description' dangerouslySetInnerHTML={{__html: slideData.paragraph}} />
      </div>
    </div>
  )
}
