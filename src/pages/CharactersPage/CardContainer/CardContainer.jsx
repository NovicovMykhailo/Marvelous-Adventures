import css from './CardContainer.module.css';

import { getComics } from '../../../services/api';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ModalContext } from 'components/Modal/ModalContext/ModalContext';

import { getObjFromParams } from 'helpers';

import PaginationComponent from 'components/Pagination/Pagination';

import toastId from 'elements/Toasts/toastId';
import ComicsCard from 'elements/ComicCard/ComicsCard';
import ErrorToast from '../../../elements/Toasts/ErrorToast';
import SuccessToast from '../../../elements/Toasts/SuccessToast';
import PendingToast from 'elements/Toasts/PendingToast';
import EmptyContainerPlaceholder from './EmptyContainerPlaceholder';
import CardElSkeleton from 'components/Modal/Skeletons/CardElSkeleton';
import PendingScreen from './PendingScreen';

const CardContainer = ({ cardLimit, isFormSearch, isFormDisabled }) => {
  const { state } = useLocation();
  const { openModal } = useContext(ModalContext);

  //search data
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevSearchState, setPrevSearchState] = useState();

  const [comics, setComics] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  //pagination state
  const [page, setPage] = useState(0);
  const [limit] = useState(cardLimit);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);

  //    >>>>>>>    //  On Load Fetch
  useEffect(() => {
    (async () => {
      try {
        setStatus('isFetching');

   

        isFormDisabled(true);
        searchParams.set('limit', limit);
        if (state?.name) {
          searchParams.set('title', state.name);
        }
        if (Number(searchParams.getAll('page')) !== 0) {
          setPage(Number(searchParams.getAll('page')));
          if (page !== 0) {
            searchParams.set('page', page);
          }
        } else searchParams.set('page', page);

        setSearchParams(searchParams);
        // console.log('Init');
        const data = await toast.promise(getComics(searchParams), {
          pending: {
            render() {
              return <PendingToast />;
            },
            icon: false,
            toastId: toastId.pending,
          },
          success: {
            render() {
              return <SuccessToast />;
            },
            toastId: toastId.success,
          },

          error: {
            render() {
              return <ErrorToast />;
            },
            icon: false,
            toastId: toastId.error,
          },
        });
        window.scrollTo({
          top: 800,
          behavior: 'smooth',
        });
        // const data = await getComics(searchParams);
        setComics(data);
        setPrevSearchState(searchParams);

        setStatus('isSuccess');
        isFormDisabled(false);
        return;
      } catch (error) {
        setStatus('isError');
        setError(error.message);
        isFormDisabled(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //    >>>>>>>    // Handle Pagination
  useEffect(() => {
    const fetchPage = async params => {
      setStatus('isPending');
      isFormDisabled(true);
      try {
        setPrevSearchState(params);
        const data = await getComics(params);
        setComics(data);
        setStatus('isSuccess');
        isFormDisabled(false);
      } catch (error) {
        isFormDisabled(false);
        setStatus('isError');
        setError(error.message);
      }
    };
    //change if page changed

    if (clicked) {
      if (page > 0) {
        const prevParams = getObjFromParams(searchParams);
        const newParams = { ...prevParams, page };
        setSearchParams(newParams);
        toast.promise(fetchPage(new URLSearchParams(newParams)), {
          pending: {
            render() {
              return <PendingToast />;
            },
            icon: false,
            toastId: toastId.pending,
          },
          success: {
            render() {
              return <SuccessToast />;
            },
            toastId: toastId.success,
          },

          error: {
            render() {
              return <ErrorToast />;
            },
            icon: false,
            toastId: toastId.error,
          },
        });

        // console.log('changing page');
        return;
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, clicked]);

  //    >>>>>>>    // Handle Search Form
  useEffect(() => {
    async function fetchPage(params) {
      setStatus('isPending');
      isFormDisabled(true);
      try {
        setPrevSearchState(params);
        const data = await getComics(params);
        setComics(data);
        setStatus('isSuccess');
        isFormDisabled(false);
      } catch (error) {
        isFormDisabled(false);
        setStatus('isError');
        setError(error.message);
      }
    }

    if (isFormSearch > 0) {
      const prevParams = getObjFromParams(searchParams);
      const newParams = { ...prevParams, page: 0 };
      setSearchParams(newParams);
      setPage(0);
      toast.promise(fetchPage(new URLSearchParams(newParams)), {
        pending: {
          render() {
            return <PendingToast />;
          },
          icon: false,
          toastId: toastId.pending,
        },
        success: {
          render() {
            return <SuccessToast />;
          },
          toastId: toastId.success,
        },
        error: {
          render() {
            return <ErrorToast />;
          },
          icon: false,
          toastId: toastId.error,
        },
      });
      // console.log('handle search form');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSearch]);

  //    >>>>>>>    // Handle Search Bar
  useEffect(() => {
    const fetchPage = async params => {
      setStatus('isPending');
      isFormDisabled(true);
      try {
        setPrevSearchState(params);
        const data = await getComics(params);
        setComics(data);
        setStatus('isSuccess');
        isFormDisabled(false);
      } catch (error) {
        isFormDisabled(false);
        setStatus('isError');
        setError(error.message);
      }
    };

    if (state?.type === 'searchBar' && state?.name) {
      const prevParams = getObjFromParams(prevSearchState);
      const newParams = { ...prevParams, page: 0, title: state?.name };
      setSearchParams(newParams);
      setPage(0);
      toast.promise(fetchPage(new URLSearchParams(newParams)), {
        pending: {
          render() {
            return <PendingToast />;
          },
          icon: false,
          toastId: toastId.pending,
        },
        success: {
          render() {
            return <SuccessToast />;
          },
          toastId: toastId.success,
        },

        error: {
          render() {
            return <ErrorToast />;
          },
          icon: false,
          toastId: toastId.error,
        },
      });
      // console.log('handle search bar');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.type]);

  //    >>>>>>>    // Pagination
  useEffect(() => {
    if (comics) {
      setTotalPages(Math.floor(comics.total / limit + 1));
      setCurrentPage(comics?.offset / limit);
    }
  }, [comics, limit]);

  function skeleton(count) {
    let arr = [];
    for (let i = 0; i < count; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  //component
  if (status === 'isFetching') {
    return (
      <div className={css.grid}>
        {skeleton(limit).map((_, index) => (
          <CardElSkeleton key={index} />
        ))}
      </div>
    );
  } else if (status === 'isError') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'isSuccess' || status === 'isPending') {
    return (
      <div style={{ position: 'relative' }}>
        {status === 'isPending' && (
          // <div style={{ width: '100%', textAlign: 'center', margin: '24px 60px' }}> isPending... </div>
          <PendingScreen />
        )}
        <div className={css.grid}>
          {comics && comics?.results?.length > 0 ? (
            comics.results.map(card => (
              <ComicsCard card={card} key={card.id} openModal={() => openModal(card.id)} size={'basic'} />
            ))
          ) : (
            <EmptyContainerPlaceholder />
          )}
        </div>
        {totalPages > 1 && (
          <PaginationComponent
            currentPage={currentPage}
            changePage={setPage}
            totalPages={totalPages}
            isClicked={setClicked}
          />
        )}
      </div>
    );
  }
};

export default CardContainer;