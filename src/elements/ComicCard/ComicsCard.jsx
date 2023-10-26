import { getImage } from 'helpers/imageConverter';
import css from './ComicsCard.module.css';

const ComicsCard = ({ card, openModal }) => {
  const { title, thumbnail, creators, id } = card;

  const authors = creators.items.filter(author => author.role === 'writer');

  return (
    <li key={id} className={css.card} onClick={() => openModal(id)}>
      <img className={css.cardImage} src={getImage(thumbnail)} alt="character" />
      <ul className={css.cardBottomTab}>
        <li className={css.cardTitle}>{title}</li>
        <li className={css.cardAuthor}>{authors.map(author => author.name).join(', ')}</li>
      </ul>
    </li>
  );
};

export default ComicsCard;
