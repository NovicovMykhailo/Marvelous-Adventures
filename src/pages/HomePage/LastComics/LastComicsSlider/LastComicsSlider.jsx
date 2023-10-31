import { getHomePageComics } from 'services/api';
import { useEffect, useRef, useState } from 'react';
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from '../../../../helpers/LocalStotageApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ReactComponent as ArrowL } from '../../../../images/arrow.svg';
import { ReactComponent as ArrowR } from '../../../../images/arrowR.svg';
import { Mousewheel, Autoplay } from 'swiper/modules';

import ComicsCard from 'elements/ComicCard/ComicsCard';
import Modal from 'components/Modal/Modal';
import ComicsModal from 'components/Modal/ComicsModal/ComicsModal';
import CharacterModal from 'components/Modal/CharacktersModal/CharacterModal';
import css from '../LastComics.module.css';
import './LastComicsSlider.css';

const LastComicsSlider = () => {
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showCharacterModal, setShowCharacteModal] = useState(false);
  const [comicsCode, setComicsCode] = useState(null);
  const [characterCode, setCharacterCode] = useState(null);
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const LastComicsSlider = useRef();

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

  const openModal = id => {
    setShowModal(true);
    setComicsCode(id);
  };

  const openCharackterModal = id => {
    setShowCharacteModal(true);
    setCharacterCode(id);
  };

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
            data.map(card => (
              <SwiperSlide key={card.id}>
                <ComicsCard card={card} openModal={openModal} size={'hero'} />
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

        {showModal && (
          <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
            <ComicsModal
              comicsCode={comicsCode}
              closeModal={() => setShowModal(prev => !prev)}
              openCharackterModal={openCharackterModal}
            />
          </Modal>
        )}
        {showCharacterModal && (
          <Modal onClose={() => setShowCharacteModal(prev => !prev)} active={showModal}>
            <CharacterModal
              id={characterCode}
              closeModal={() => setShowCharacteModal(prev => !prev)}
            />
          </Modal>
        )}
      </div>
    
  );
};

export default LastComicsSlider;
