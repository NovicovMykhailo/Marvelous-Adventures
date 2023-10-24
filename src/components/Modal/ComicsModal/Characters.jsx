import { getImage } from 'helpers/imageConverter';
import css from './ComicsModal.module.css';

const Characters = ({ characters }) => {
  return (
    <div>
      <h3 className={css.modalTitle}>Characters </h3>
      <ul className={css.characters}>
        {characters.map(({ name, thumbnail, id }) => {
          return (
            <li key={id} className={css.charactersListItem}>
              <img className={css.charactersImage} src={getImage(thumbnail, 'med_Sq')} alt="character" title={name} width="60" />
              <p className={css.modalText}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Characters;
