import { getHomePageComics } from 'services/api';
import { useEffect, useState } from 'react';
import { readFromLocalStorage, writeToLocalStorage } from '../../../helpers/LocalStotageApi';
import { Swiper, SwiperSlide } from 'components/Slider/Slider';
// import {Autoplay} from 'swiper/modules';

import ComicsCard from 'elements/ComicCard/ComicsCard';
import Modal from 'components/Modal/Modal';
import ComicsModal from 'components/Modal/ComicsModal/ComicsModal';
import CharacterModal from 'components/Modal/CharacktersModal/CharacterModal';
import css from './LastComics.module.css';

const LastComics = () => {
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showCharacterModal, setShowCharacteModal] = useState(false);
  const [comicsCode, setComicsCode] = useState(null);
  const [characterCode, setCharacterCode] = useState(null);

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

  return (
    <>
      <h2 className={css.title}>Last Comics</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        speed={2000}
        height={600}
        // loop={true}
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
      >
        {data &&
          data.map(card => (
            <SwiperSlide key={card.id}>
              <ComicsCard card={card} openModal={openModal} size={'hero'} />
            </SwiperSlide>
          ))}
      </Swiper>

      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ComicsModal comicsCode={comicsCode} closeModal={() => setShowModal(prev => !prev)} openCharackterModal={openCharackterModal} />
        </Modal>
      )}
      {showCharacterModal && (
        <Modal onClose={() => setShowCharacteModal(prev => !prev)} active={showModal}>
          <CharacterModal id={characterCode} closeModal={() => setShowCharacteModal(prev => !prev)} />
        </Modal>
      )}
    </>
  );
};

export default LastComics;
