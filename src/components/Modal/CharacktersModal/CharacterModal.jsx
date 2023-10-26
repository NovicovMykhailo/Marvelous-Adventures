import css from './CharacterModal.module.css';
import CloseBtn from 'elements/CloseBtn/CloseBtn';
import { getCaracter } from '../../../services/api';
import { useEffect, useState } from 'react';
import { getImage } from 'helpers/imageConverter';
import ComicsCard from 'elements/ComicCard/ComicsCard';

const CharacterModal = ({ id, closeModal }) => {
  console.log('CharacterModal -> id', id);
  const [character, setCharacter] = useState(null);
  const [comicsList, setComicsList] = useState(null);

  useEffect(() => {
    (async () => {
      const { character, comicsList } = await getCaracter(id);
      setCharacter(character);
      setComicsList(comicsList);
    })();
  }, [id]);

  if (character) {
    const { name, description, thumbnail } = character;
    return (
      <article className={css.modalCard}>
        <CloseBtn onClick={closeModal} />

        <div>
          image Block
          <div>
            <img src={getImage(thumbnail)} alt="Poster" />
          </div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div>
          description Block
          <div>
            <h3>{name}</h3>
            <p>Date</p>
          </div>
          <p>{description}</p>
          <ul>
            {comicsList.map(comic => (
              <ComicsCard key={comic.id} card={comic} />
            ))}
          </ul>
        </div>
      </article>
    );
  }
};

export default CharacterModal;
