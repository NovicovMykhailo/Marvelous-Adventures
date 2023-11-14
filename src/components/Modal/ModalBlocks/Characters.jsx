import { useContext } from 'react';
import { ModalContext } from '../ModalContext/ModalContext';
import css from '../ComicsModal/ComicsModal.module.css'
import { getImage, urlNormalizer } from 'helpers';



const Characters = ({ characters}) => {
const {openCharackterModal} = useContext(ModalContext)
  
  return (
    <div>
      <h3 className={css.modalTitle}>Characters </h3>
      <ul className={css.characters}>
        {characters.map(({ name, thumbnail, id }) => {
          return (
            <li key={id} className={css.charactersListItem} onClick={()=>openCharackterModal(id)}>
              <img className={css.charactersImage} src={urlNormalizer(getImage(thumbnail, 'med_Sq'))} alt="character" title={name} width="60" />
              <p className={css.modalText}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Characters;
