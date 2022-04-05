import Scene from './Scene'
import MetaObject from './MetaObject'
import {useRef, useState, useEffect} from "react";
import NormalizeWheel from 'normalize-wheel';
import useScrollToggler from '../../hooks/useScrollToggler';


export default function Hero({contents}) {

  const heroRef = useRef();
  const [scrollIsActive, toggleScroll] = useScrollToggler();

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


  const onWheel = () => {
    const normalized = NormalizeWheel(event);
    console.log(normalized.pixelY);
  };

  /* ---------------------------------------------------------------------*/
  /* ---------------------  EFFECTS --------------------------------------*/
  /* ---------------------------------------------------------------------*/

  /* ---- Trig scroll and swype state -------------------------------------*/

  useEffect(() => {
    // prevent default page scrolling
    toggleScroll(false);
    // listen to wheel
    heroRef.current.addEventListener('wheel', onWheel);
  }, []);

  /* ---------------------------------------------------------------------*/
  /* ---------------------  RENDER ---------------------------------------*/
  /* ---------------------------------------------------------------------*/

  return (
    <div className='c-hero' ref={heroRef}>
      <div className='c-hero__canvas'>
        <Scene>
          <MetaObject
            animationState={animationState}
            callBack={changeCallback}
            modelType={slideData.model}
          >
          </MetaObject>
        </Scene>
      </div>
      <div className='c-hero__content' data-animation={animationState}>
        {scrollIsActive && <strong>SCROLL ATTIVO</strong>}
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
