import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade} from 'swiper/modules';
import { useRef, useState } from 'react';

import HeroSlide1 from '../HeroSlide1';
import HeroSlide2 from '../HeroSlide2';
import HeroSlide3 from '../HeroSlide3';

import './HeroSlider.css';
import 'swiper/css/effect-fade';


const HeroSlider = () => {
  const swiperRef =  useRef()
  const [navBar, setNavBar] = useState({
    firstBar: 'active',
    secondBar: '',
    thirdBar: '',
  });

  function onSlideChange(e) {

    switch (e.activeIndex) {
      case 0:
        setNavBar({ firstBar: 'active', secondBar: '', thirdBar: '' });
        break;
      case 1:
        setNavBar({ firstBar: '', secondBar: 'active', thirdBar: '' });
        break;
      case 2:
        setNavBar({ firstBar: '', secondBar: '', thirdBar: 'active' });
        break;
      default:
        setNavBar({ firstBar: 'active', secondBar: '', thirdBar: '' });
        break;
    }
  }

  function HandleClick(e) {
    console.log();
    switch (e.target.attributes[1].nodeName) {
      case 'data-first':
        swiperRef.current.swiper.slideTo(0);
        break;
      case 'data-second':
        swiperRef.current.swiper.slideTo(1)
        break;
      case 'data-third':
        swiperRef.current.swiper.slideTo(2)
        break;

      default:
        break;
    }
  }

  return (
    <div className="hero">
      <Swiper
        height={780}
        direction={'vertical'}
        ref={swiperRef}
        effect={'fade'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[ Mousewheel]}
        className="swiper"
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <HeroSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide2 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide3 />
        </SwiperSlide>
      </Swiper>
      <div className="pagination">
        <div className={`pageElement ${navBar.firstBar}`} onClick={HandleClick} data-first></div>
        <div className={`pageElement ${navBar.secondBar}`} onClick={HandleClick} data-second></div>
        <div className={`pageElement ${navBar.thirdBar}`} onClick={HandleClick} data-third></div>
      </div>
    </div >
  );
};

export default HeroSlider;
