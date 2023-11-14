import css from './Pagination.module.css';
import { Pagination } from 'react-headless-pagination';
import { ReactComponent as Prev } from './iconLeft.svg';
import { ReactComponent as Next } from './iconRight.svg';
import { pageToTop } from 'helpers';




const PaginationComponent = ({currentPage, changePage, totalPages = 10, isClicked}) => {



  const handlePageChange = page => {
    isClicked(true)
    changePage(page)
    pageToTop() 

  };

  return (
    <div>
   
      <Pagination
        currentPage={currentPage}
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
    
    </div>
  );
};

export default PaginationComponent;
