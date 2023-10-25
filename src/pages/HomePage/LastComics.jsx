import { getComics } from 'services/api';
import { useEffect, useState } from 'react';
import ComicsCard from 'elements/ComicsCard';
import Modal from 'components/Modal/Modal';
import ComicsModal from 'components/Modal/ComicsModal/ComicsModal';

const LastComics = () => {
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [comicsCode, setComicsCode] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getComics();
      setData(data.results);
    })();
  }, []);

  const openModal = id => {
    setShowModal(true);
    setComicsCode(id);
  };

  return (
    <>
      <ul style={style.grid}>
        {data &&
          data.map(card => (
            <ComicsCard card={card} key={card.id} openModal={openModal} />
          ))}
      </ul>

      {showModal && (
        <Modal onClose={() => setShowModal(prev => !prev)} active={showModal}>
          <ComicsModal
            comicsCode={comicsCode}
            closeModal={() => setShowModal(prev => !prev)}
          />
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
