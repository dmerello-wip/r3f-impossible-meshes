import Scene from './Scene'
import Triangle from './Triangle'
import DoubleTriangle from './DoubleTriangle'
import Cube from './Cube'
import {useState} from "react";

export default function Hero({contents}) {

  const [index, setIndex] = useState(0);
  const [slideData, setSlideData] = useState(contents[index]);

  return (
    <div className='c-hero'>
    <div className='c-hero__canvas'>
      <Scene orbitControlActive>
        {(slideData.model==='DoubleTriangle') && <DoubleTriangle />}
        {(slideData.model==='Triangle') && <Triangle />}
        {(slideData.model==='Cube') && <Cube />}
      </Scene>
    </div>
      <div className='c-hero__content'>
        <div className="c-hero__index">{index}</div>
        <div className='c-hero__pretitle'>{slideData.pretitle}</div>
        <div className='c-hero__title'>{slideData.title}</div>
        <div className='c-hero__subtitle'>{slideData.subtitle}</div>
        <div className='c-hero__description' dangerouslySetInnerHTML={{__html: slideData.paragraph}} />
      </div>
    </div>
  )
}
