import css from './Pagination.module.css';
import { Pagination } from 'react-headless-pagination';
import { ReactComponent as Prev } from './iconLeft.svg';
import { ReactComponent as Next } from './iconRight.svg';
import { pageToTop } from 'helpers';
import useWindowResize from 'hooks/useWindowResize';

const PaginationComponent = ({ currentPage, changePage, totalPages = 10, isClicked }) => {
  const { width } = useWindowResize();

  const handlePageChange = page => {
    isClicked(true);
    changePage(page);
    pageToTop();
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
        edgePageCount={width >= 748 ? 2 : 1}
        className={css.paginationContainer}
        middlePagesSiblingCount={1}
        truncableText="..."
        truncableClassName={css.paginationButtons}
      >
        <div className={css.paginationButtonsBlock}>
          <Pagination.PrevButton className={`${css.paginationButtons}`}>
            <Prev className={css.navigationIcon} />
          </Pagination.PrevButton>
          <ul style={{display: 'flex', gap: "8px"}}>
            <Pagination.PageButton activeClassName={css.buttonsActive} className={css.paginationButtons} />
          </ul>

          <Pagination.NextButton className={`${css.paginationButtons}`}>
            <Next className={css.navigationIcon} />
          </Pagination.NextButton>
        </div>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
