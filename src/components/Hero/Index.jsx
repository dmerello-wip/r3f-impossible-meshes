import Scene from './Scene'
import Triangle from './Triangle'
import DoubleTriangle from './DoubleTriangle'
import Cube from './Cube'
import MetaObject from './MetaObject'
import {useState, useEffect} from "react";

export default function Hero({contents}) {

  const slidesData = contents.map((elem,i)=> {
    elem.index = i+1;
    return elem;
  });

  const [slideData, setSlideData] = useState(slidesData[0]);
  const [animationState, setAnimationState] = useState('in'); // values: out, in
  const [nextSlideIndex, setNextSlideIndex] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeHandler = (index)=>{
    if(index===currentSlideIndex) return;
    setNextSlideIndex(index);
    setAnimationState('out');
  };

  const changeCallback = ()=>{
    setSlideData(slidesData[nextSlideIndex]);
    setAnimationState('in');
    setCurrentSlideIndex(nextSlideIndex);
  };

  const renderNavigation = ()=>{
    return slidesData.map((el, i)=>{
      let itemClass = (i===currentSlideIndex) ? "c-hero__navigation__item c-hero__navigation__item--active" : "c-hero__navigation__item";
      return (
        <div key={`animation-item-${i}`} className={itemClass} onClick={()=>{changeHandler(i)}}>{el.index} - {el.title}</div>
      );
    });
  }

  return (
    <div className='c-hero'>
      <div className='c-hero__canvas'>
        <Scene orbitControlActive>
          <MetaObject animationState={animationState} callBack={changeCallback}>
            {(slideData.model==='DoubleTriangle') && <DoubleTriangle />}
            {(slideData.model==='Triangle') && <Triangle />}
            {(slideData.model==='Cube') && <Cube />}
          </MetaObject>
        </Scene>
      </div>
      <div className='c-hero__content' data-animation={animationState}>
        <div className="c-hero__index">{slideData.index}</div>
        <div className='c-hero__pretitle'>{slideData.pretitle}</div>
        <div className='c-hero__title'>{slideData.title}</div>
        <div className='c-hero__subtitle'>{slideData.subtitle}</div>
        <div className='c-hero__description' dangerouslySetInnerHTML={{__html: slideData.paragraph}} />
      </div>
      <div className="c-hero__navigation">
        {renderNavigation()}
      </div>
    </div>
  )
}
