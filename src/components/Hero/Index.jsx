import Scene from './Scene'
import MetaObject from './MetaObject'
import {useRef, useState, useEffect, useMemo, useCallback} from "react";
import NormalizeWheel from 'normalize-wheel';
import useScrollToggler from '../../hooks/useScrollToggler';
import classNames from 'classnames';

export default function Hero({contents}) {
  const heroRef = useRef();
  const [scrollIsActive, toggleScroll] = useScrollToggler();

  // prepare contents of slides adding an index key
  const slidesData = useMemo(() => contents.map((elem, i) => {
    elem.index = i + 1;
    return elem;
  }), [contents]);

  const allowOnWheel = useRef(true);

  const [state, setState] = useState({
    animationState: 'in',
    nextSlideIndex: 0,
    currentSlideIndex: 0,
  });

  const changeHandler = (index) => {
    if (index === state.currentSlideIndex) return;
    setState({
      ...state,
      nextSlideIndex: index,
      animationState: 'out',
    });
  };

  const scrollUp = ()=> {
    if (state.currentSlideIndex === 0) return;
    changeHandler(state.currentSlideIndex - 1);
  }
  const scrollDown = ()=> {
    if (state.currentSlideIndex === (slidesData.length - 1)) {
      toggleScroll(true);
      allowOnWheel.current = true;
      return false;
    } else {
      changeHandler(state.currentSlideIndex + 1);
    }
  }

  const changeCallback = () => {
    // heroRef.current.addEventListener('wheel', onWheel);
    allowOnWheel.current = true;
    setState({
      ...state,
      animationState: 'in',
      currentSlideIndex: state.nextSlideIndex,
    });
  };

  const renderNavigation = () => {
    return slidesData.map((el, i) => {
      let itemClass = classNames('c-hero__navigation__item', {
        'c-hero__navigation__item--active': (i === state.currentSlideIndex)
      });
      return (
        <div key={`animation-item-${i}`} className={itemClass} onClick={() => {
          changeHandler(i)
        }}>{el.index} - {el.title}</div>
      );
    });
  }

  const onWheel = useCallback((e) => {
    if (!allowOnWheel.current) return;
    allowOnWheel.current = false;
    const normalized = NormalizeWheel(e);
    // if you want an infinite cycle on gallery elements:
    // const nextIdx = normalized.pixelY < 0
    //   ? Math.abs((state.currentSlideIndex - 1) % slidesData.length)
    //   : (state.currentSlideIndex + 1) % slidesData.length;
    ( (normalized.pixelY < 0) ? scrollUp : scrollDown)();
  }, [state.currentSlideIndex]);

  /* ---------------------------------------------------------------------*/
  /* ---------------------  EFFECTS --------------------------------------*/
  /* ---------------------------------------------------------------------*/

  /* ---- Trig scroll and swype state -------------------------------------*/

  useEffect(() => {
    // prevent default page scrolling
    toggleScroll(false);
    // listen to wheel
    heroRef.current.addEventListener('wheel', onWheel);
    return () => heroRef.current.removeEventListener('wheel', onWheel);
  }, [onWheel]);

  /* ---------------------------------------------------------------------*/
  /* ---------------------  RENDER ---------------------------------------*/
  /* ---------------------------------------------------------------------*/

  const content = slidesData[state.currentSlideIndex];

  return (
    <div className='c-hero' ref={heroRef}>
      <div className='c-hero__canvas'>
        <Scene>
          <MetaObject
            animationState={state.animationState}
            callBack={changeCallback}
            modelType={content.model}
          >
          </MetaObject>
        </Scene>
      </div>
      <div className='c-hero__content' data-animation={state.animationState}>
        <div className='c-hero__pretitle'>{content.pretitle}</div>
        <div className='c-hero__title'>{content.title}</div>
        <div className='c-hero__subtitle'>{content.subtitle}</div>
        <div className='c-hero__description' dangerouslySetInnerHTML={{__html: content.paragraph}}/>
      </div>
      <div className="c-hero__navigation">
        {renderNavigation()}
      </div>
    </div>
  )
}
