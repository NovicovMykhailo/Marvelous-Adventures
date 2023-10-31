import css from './CardContainer.module.css';
import { useQuery } from 'react-query';
import { getComics } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import filteredQuery from 'helpers/filteredQuery';

import PaginationComponent from 'components/Pagination/Pagination';
import ContainerPlaceholder from './ContainerPlaceholder';
import ComicsCard from 'elements/ComicCard/ComicsCard';
import Modal from 'components/Modal/Modal';
import ComicsModal from 'components/Modal/ComicsModal/ComicsModal';
import CharacterModal from 'components/Modal/CharacktersModal/CharacterModal';

const CardContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useLocation();

  const [page, setPage] = useState(0);
  const [comicsCode, setComicsCode] = useState(null);
  const [characterCode, setCharacterCode] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCharacterModal, setShowCharacteModal] = useState(false);
  const {
    isPending,
    isError,
    error,
    data: comics,
    isFetching,
  } = useQuery(
    ['/search', page],
    () => {
      const params = {
        title: state?.name ? state.name : null,
        page,
      };
      const filteredParams = filteredQuery(params);

      setSearchParams(filteredParams);
      return getComics(page);
    },
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (comics) {
      setTotalPages(Math.floor(comics.total / 12 + 1));
      setCurrentPage(comics.offset / 12);
    }
  }, [comics]);

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
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <>
            <ContainerPlaceholder />
            <div>Error: {error.message}</div>
          </>
        ) : (
          <div className={css.grid}>
            {comics && comics.results.map(card => <ComicsCard card={card} key={card.id} openModal={openModal} size={'basic'} />)}
          </div>
        )}
        {isFetching ? <span> Loading...</span> : null}
        <PaginationComponent currentPage={currentPage} changePage={setPage} totalPages={totalPages} />
      </div>

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

export default CardContainer;
