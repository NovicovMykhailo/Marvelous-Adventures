import css from './ComicsModal.module.css'

const Details = ({ comic }) => {
  const { format, prices, pageCount, dates } = comic;
  const dateRelease = dates[1].date.slice(0, 4);

  return (
    <ul className={css.details}>
      <li>
        <p className={css.detailName}>format</p>
        <p className={css.modalText}>{format}</p>
      </li>
      <li>
        <p className={css.detailName}>year released</p>
        <p className={css.modalText}>{dateRelease}</p>
      </li>
      <li>
        <p className={css.detailName}>pages</p>
        <p className={css.modalText}>{pageCount}</p>
      </li>
      <li>
        <p className={css.detailName}>price</p>
        <p className={css.modalText}>${prices[0].price}</p>
      </li>
    </ul>
  );
};

export default Details;
