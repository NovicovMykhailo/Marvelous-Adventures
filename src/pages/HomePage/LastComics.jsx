import { getHomePageComics } from 'services/api';
import { useEffect, useState } from 'react';
import { readFromLocalStorage, writeToLocalStorage } from '../../helpers/LocalStotageApi';
import ComicsCard from 'elements/ComicCard/ComicsCard';
import Modal from 'components/Modal/Modal';
import ComicsModal from 'components/Modal/ComicsModal/ComicsModal';
import CharacterModal from 'components/Modal/CharacktersModal/CharacterModal';

const LastComics = () => {
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showCharacterModal, setShowCharacteModal] = useState(false);
  const [comicsCode, setComicsCode] = useState(null);
  const [characterCode, setCharacterCode] = useState(null);

  useEffect(() => {
    if (!readFromLocalStorage('TopComics')) {
      (async () => {
        // const data = await getHomePageComics();
        // setData(data.results);
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
      <ul style={style.grid}>{data && data.map(card => <ComicsCard card={card} key={card.id} openModal={openModal} />)}</ul>

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

const style = {
  grid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
};
