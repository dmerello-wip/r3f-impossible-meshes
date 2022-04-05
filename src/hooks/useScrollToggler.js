import {useState, useEffect, useRef, useCallback} from 'react';

export default function useScrollToggler() {

  const [scrollIsActive, setScrollIsActive] = useState(true);
  const wheelOpt = useRef();
  let keys = {37: 1, 38: 1, 39: 1, 40: 1};

  // useCallback in order to to re-create the function on render
  // otherwise the removeEventListener will not work
  const prevent = useCallback((e) => {
    e.preventDefault();
  }, []);

  const preventForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  const disableScroll = () => {
    window.addEventListener('wheel', prevent, wheelOpt.current); // modern desktop
    window.addEventListener('touchmove', prevent, wheelOpt.current); // mobile
    window.addEventListener('keydown', preventForScrollKeys, false);
  };

  const enableScroll = () => {
    window.removeEventListener('wheel', prevent, wheelOpt.current);
    window.removeEventListener('touchmove', prevent, wheelOpt.current);
    window.removeEventListener('keydown', preventForScrollKeys, false);
  };

  const supportPassiveChrome = ()=>{
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true;  }
      }));
    } catch(e) {/* console.log(e) */}
    wheelOpt.current = supportsPassive ? { passive: false } : false;
  };

  const toggleScroll = (enabled)=>{
    if(enabled) {
      enableScroll();
      setScrollIsActive(true);
    } else {
      disableScroll();
      setScrollIsActive(false);
    }
  };

  useEffect(() => {
    supportPassiveChrome();
  }, []);

  return [scrollIsActive, toggleScroll];
}


