import { getImage, urlNormalizer } from 'helpers';
import css from './ComicsCard.module.css';

const ComicsCard = ({ card, openModal, size }) => {
  const { title, thumbnail, creators, id } = card;

  const styles = {
    hero: css.hero,
    basic: css.basic,
  };

  const authors = creators.items.filter(author => author.role === 'writer');

  return (
    <div data-scroll data-scroll-speed="1"
      className={`${css.card} ${styles[size]}`}
      onClick={() => openModal(id)}
      title={`${title} \nby: ${authors.map(author => author.name).join(' and ')}`}
    >
      <img className={`${css.cardImage} animate`} src={urlNormalizer(getImage(thumbnail))} alt="character" />
      <ul className={css.cardBottomTab}>
        <li className={css.cardTitle}>{title}</li>
        <li className={css.cardAuthor}>
          {authors.map(author => author.name).join(', ')}
        </li> 
      </ul>
    </div>
  );
};

export default ComicsCard;
