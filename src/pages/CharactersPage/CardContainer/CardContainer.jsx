// import css from './CardContainer.module.css';
import { useQuery } from 'react-query';
import { getComics } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { filteredQuery, getObjFromParams } from 'helpers';


// import PaginationComponent from 'components/Pagination/Pagination';
import useWindowDimensions from 'hooks/useWindowResize';

// import ContainerPlaceholder from './ContainerPlaceholder';
// import ComicsCard from 'elements/ComicCard/ComicsCard';

const CardContainer = () => {
  const { state } = useLocation();
  const { width } = useWindowDimensions();

  //search data
  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchState, setSearchState] = useState({});

  //pagination
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(null);
  // const [currentPage, setCurrentPage] = useState(page);
  // const [totalPages, setTotalPages] = useState(0);

  const {
    // isPending,
    // isError,
    // error,
    // data: comics,
    // isFetching,
  } = useQuery(
    ['/search', searchParams, page, limit],
    () => {
      console.log(getObjFromParams(searchParams))
      return getComics(searchParams);
    },
    {
      keepPreviousData: true,
    }
  );

  //Handle Search params
  useEffect(() => {
    searchParams.set('page', page);
    limit && searchParams.set('limit', limit)
    if (state?.name) searchParams.set('title', state.name);
    if (Number(searchParams.getAll('page')) > 0) {
      setPage(Number(searchParams.getAll('page')));
      searchParams.set('page', page);
    }
    setSearchParams(searchParams);
  }, [limit, page, searchParams, setSearchParams, state?.name]);
//handle media limit 
  useEffect(() => {
    const mobile = Boolean(width < 768 && limit !== 5);
    const tablet = Boolean(width >= 768 && width < 1100 && limit !== 8);
    const desktop = Boolean(width >= 1100 && limit !== 16);

    mobile && setLimit(5);
    tablet && setLimit(8);
    desktop && setLimit(16);
  }, [limit, width]);

  // useEffect(() => {
   
  //   setSearchParams(searchParams);
  // }, [limit, searchParams, setSearchParams]);
  //query

  //pagination
  // useEffect(() => {
  //   if (comics) {
  //     setTotalPages(Math.floor(comics.total / limit + 1));
  //     setCurrentPage(comics.offset / limit);
  //   }
  // }, [comics]);

  //component
  return (
    <>
      <div>
        {/* {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <>
            <ContainerPlaceholder />
            <div>Error: {error.message}</div>
          </>
        ) : (
          <div className={css.grid}>
            {comics &&
              comics.results.map(card => (
                <ComicsCard
                  card={card}
                  key={card.id}
                  openModal={openModal}
                  size={'basic'}
                />
              ))}
          </div>
        )}
        {isFetching ? <span> Loading...</span> : null}*/}
        {/* <PaginationComponent currentPage={currentPage} changePage={setPage} totalPages={totalPages} /> */}
      </div>
    </>
  );
};

export default CardContainer;
