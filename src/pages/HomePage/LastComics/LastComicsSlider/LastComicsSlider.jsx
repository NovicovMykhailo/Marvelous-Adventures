import { getHomePageComics } from 'services/api';
import { useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from 'components/Modal/ModalContext/ModalContext';
import { readFromLocalStorage, writeToLocalStorage } from 'helpers/LocalStotageApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ReactComponent as ArrowL } from '../../../../images/arrow.svg';
import { ReactComponent as ArrowR } from '../../../../images/arrowR.svg';
import { Mousewheel, Autoplay } from 'swiper/modules';

import ComicsCard from 'elements/ComicCard/ComicsCard';
import css from '../LastComics.module.css';
import './LastComicsSlider.css';


const LastComicsSlider = () => {
  const [data, setData] = useState('');
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const LastComicsSlider = useRef();
  const {openModal} = useContext(ModalContext)



  useEffect(() => {
    if (!readFromLocalStorage('TopComics')) {
      (async () => {
        const data = await getHomePageComics();
        setData(data.results);
        writeToLocalStorage('TopComics', data);
      })();
    } else {
      const data = readFromLocalStorage('TopComics');
      setData(data.results);
    }
  }, []);


  const handleClick = e => {
    switch (e.target.attributes[4].nodeName) {
      case 'data-prev':
        LastComicsSlider.current.swiper.slidePrev();
        break;
      case 'data-next':
        LastComicsSlider.current.swiper.slideNext();
        break;

      default:
        break;
    }
  };

  function isButtonActive(e) {
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }

  return (

    
      <div className="lastComics">
        <h2 className={css.title}>Last Comics</h2>
        <Swiper
          containerModifierClass={'swiper-lastComics'}
          slidesPerView={3}
          spaceBetween={16}
          speed={2000}
          ref={LastComicsSlider}
          modules={[Autoplay, Mousewheel]}
          effect={'slide'}
          mousewheel={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={isButtonActive}
        >
          {data &&
            data.map((card, i) => (
              <SwiperSlide key={card.id}>
                <ComicsCard card={card} openModal={()=>openModal(card.id)} size={'hero'} i={i}/>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={css.LastComicsPaginations}>
          <ArrowL
            data-prev
            className={`${css.arrowL} ${isStartBtnActive && css.inactive}`}
            onClick={handleClick}
          />
          <ArrowR
            data-next
            className={`${css.arrowR} ${isEndBtnActive && css.inactive}`}
            onClick={handleClick}
          />
        </div>
      </div>
    
  );
};

export default LastComicsSlider;
