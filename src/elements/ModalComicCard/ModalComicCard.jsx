import { Link } from 'react-router-dom';
import { getImage } from 'helpers';
import { useContext } from 'react';
import { ModalContext } from 'components/Modal/ModalContext/ModalContext';
import css from './ModalComicCard.module.css';

const ModalComicCard = ({ card }) => {
  const { title, thumbnail, creators } = card;
  const { closeAllModals } = useContext(ModalContext);

  const authors = creators.items.filter(author => author.role === 'writer');
  const index = title.includes(', ') ? title.indexOf(',') - 1 : title.indexOf('(') - 1;

  return (
    <Link
      to={'/search'}
      state={{ name: `${title.slice(0, index).toLowerCase()}`, type: 'searchBar' }}
      onClick={() => setTimeout(closeAllModals(), 1000)}
      className={`${css.card}`}
      title={`${title} \nby: ${authors.map(author => author.name).join(' and ')}`}
    >
      <div className={css.cardImageBlock}>
        <img className={`${css.cardImage} animate`} src={getImage(thumbnail)} alt="character" />
      </div>

      <ul className={css.cardBottomTab}>
        <li className={css.cardTitle}>{title}</li>
        <li className={css.cardAuthor}>{authors.map(author => author.name).join(', ')}</li>
      </ul>
    </Link>
  );
};

export default ModalComicCard;
