import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Parallax, Autoplay } from 'swiper/modules';
import { AnimationContext } from 'elements/Animations/AnimationContext';
import { useContext, useRef, useState } from 'react';

import HeroSlide1 from '../HeroSlide1';
import HeroSlide2 from '../HeroSlide2';
import HeroSlide3 from '../HeroSlide3';

import './HeroSlider.css';
import useWindowResize from 'hooks/useWindowResize';

const HeroSlider = () => {
  const swiperRef = useRef();
  const { width } = useWindowResize();

  const animSpeed = width < 1440 ? 800 : 1300;

  const { animationState } = useContext(AnimationContext);
  const [navBar, setNavBar] = useState({
    firstBar: 'active',
    secondBar: '',
    thirdBar: '',
  });

  function onSlideChange(e) {
    setTimeout(() => {
      switch (e.activeIndex) {
        case 0:
          setNavBar({ firstBar: 'active', secondBar: '', thirdBar: '' });
          swiperRef.current.swiper.mousewheel.enable();
          break;
        case 1:
          setNavBar({ firstBar: '', secondBar: 'active', thirdBar: '' });
          swiperRef.current.swiper.mousewheel.enable();
          break;
        case 2:
          setNavBar({ firstBar: '', secondBar: '', thirdBar: 'active' });
          swiperRef.current.swiper.mousewheel.disable();
          break;
        default:
          setNavBar({ firstBar: 'active', secondBar: '', thirdBar: '' });

          break;
      }
    }, animSpeed);
  }

  function HandleClick(e) {
    switch (e.target.attributes[1].nodeName) {
      case 'data-first':
        swiperRef.current.swiper.slideTo(0);
        break;
      case 'data-second':
        swiperRef.current.swiper.slideTo(1);
        break;
      case 'data-third':
        swiperRef.current.swiper.slideTo(2);
        break;

      default:
        break;
    }
  }
  if (swiperRef.current) {
    animationState ? swiperRef.current.swiper.autoplay.start() : swiperRef.current.swiper.autoplay.stop();
  }

  return (
    <div className="hero">
      <Swiper
        ref={swiperRef}
        mousewheel={true}
        effect={'slide'}
        parallax={true}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, Parallax, Mousewheel]}
        // speed={2500}
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="swiper"
        onSlideChange={onSlideChange}
        breakpoints={{
          375: {
            height: 1086,
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            speed: 800,
          },
          768: {
            height: 1095,
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: false,
            speed: 800,
          },
          1400: {
            height: 780,
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 2500,
          },
        }}
      >
        <SwiperSlide data-blue>
          <HeroSlide1 />
        </SwiperSlide>
        <SwiperSlide data-red>
          <HeroSlide2 />
        </SwiperSlide>
        <SwiperSlide data-green>
          <HeroSlide3 />
        </SwiperSlide>
      </Swiper>
      <div className="pagination">
        <div className={`pageElement ${navBar.firstBar}`} onClick={HandleClick} data-first></div>
        <div className={`pageElement ${navBar.secondBar}`} onClick={HandleClick} data-second></div>
        <div className={`pageElement ${navBar.thirdBar}`} onClick={HandleClick} data-third></div>
      </div>
    </div>
  );
};

export default HeroSlider;
