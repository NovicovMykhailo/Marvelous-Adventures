import { createContext, useState } from 'react';
import Modal from '../Modal';
import ComicsModal from '../ComicsModal/ComicsModal';
import CharacterModal from '../CharactersModal/CharacterModal';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCharacterModal, setShowCharacteModal] = useState(false);
  const [comicsCode, setComicsCode] = useState(null);
  const [characterCode, setCharacterCode] = useState(null);

  const openModal = id => {
    setShowModal(true);
    setComicsCode(id);
  };

  const openCharackterModal = id => {
    setShowCharacteModal(true);
    setCharacterCode(id);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal: id => openModal(id),
        openCharackterModal: id => openCharackterModal(id),
        closeAllModals: ()=>{setShowModal(false); setShowCharacteModal(false)}
      }}
    >
     
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
          <CharacterModal id={characterCode} closeModal={() => setShowCharacteModal(prev => !prev)} />
        </Modal>
      )}
     {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
