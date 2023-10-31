import css from './Pagination.module.css';
import { Pagination } from 'react-headless-pagination';
import { ReactComponent as Prev } from './iconLeft.svg';
import { ReactComponent as Next } from './iconRight.svg';


import { useState } from 'react';

const PaginationComponent = ({currentPage = 0, changePage, totalPages = 10}) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = page => {
    setPage(page);
    changePage(page)
  };

  return (
    <div>
   
      <Pagination
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
        edgePageCount={2}
        className={css.paginationContainer}
        middlePagesSiblingCount={1}
        truncableText="..."
        truncableClassName={css.paginationButtons}
      >
        <div className={css.paginationButtonsBlock}>
          <Pagination.PrevButton className={`${css.paginationButtons}`}>
            <Prev className={css.navigationIcon} />
          </Pagination.PrevButton>

          <Pagination.PageButton
            activeClassName={css.buttonsActive}
            className={css.paginationButtons}
          />
          <Pagination.NextButton className={`${css.paginationButtons}`}>
            <Next className={css.navigationIcon} />
          </Pagination.NextButton>
        </div>
      </Pagination>
      <p style={{width:"100%", textAlign: 'center', marginTop: '32px',}}> Current page: {page}</p>
     
    </div>
  );
};

export default PaginationComponent;
