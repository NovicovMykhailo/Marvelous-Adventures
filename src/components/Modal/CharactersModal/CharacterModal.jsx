import css from '../ComicsModal/ComicsModal.module.css';
import { useEffect, useRef, useState } from 'react';
import { getCaracter } from '../../../services/api';
import ModalComicCard from 'elements/ModalComicCard/ModalComicCard';
import CloseBtn from 'elements/CloseBtn/CloseBtn';
import { dateFormater, blockSplitter, lorem } from 'helpers';
import { AboutSkeleton, ComicsListSkeleton, GallerySkeleton } from '../Skeletons';
import { Gallery } from '../ModalBlocks';

const CharacterModal = ({ id, closeModal }) => {
  const [character, setCharacter] = useState(null);
  const [comicsList, setComicsList] = useState(null);
  const [stories, setStories] = useState(null);
  const [height, setHeight] = useState(null);
  const [status, setStatus] = useState('init');

  const descriptionBlock = useRef(null);

  function getHeight(galleryHeight) {
    const descriptionBlockheight = descriptionBlock.current.clientHeight;
    if (galleryHeight > descriptionBlockheight) {
      setHeight(`${galleryHeight}px`);
      return;
    } else {
      return;
    }
  }

  useEffect(() => {
    (async () => {
      setStatus('pending');
      const { character, comicsList, stories } = await getCaracter(id);
      setCharacter(character);
      setComicsList(comicsList);
      setStories(stories);
      setStatus('fullfield');
    })();
  }, [id]);

  return (
    <article className={css.modalCard}>
      <CloseBtn onClick={closeModal} />
      {status === 'fullfield' && <Gallery stories={stories} comicsData={character} setHeight={getHeight} />}
      {status === 'pending' && <GallerySkeleton />}
      <div className={css.descriptionBlock} style={{ height: height }} ref={descriptionBlock}>
        {status === 'fullfield' && (
          <>
            <div className={css.aboutHeader}>
              <h3 className={css.modalTitle}>{character.name}</h3>
              <ul className={css.authorDetailTitle}>
                <li>{dateFormater(character.modified)}</li>
              </ul>
            </div>

            <ul className={css.modalText}>
              {character.description === '' || null ? blockSplitter(lorem) : blockSplitter(character.description)}
            </ul>
          </>
        )}
        {status === 'pending' && <AboutSkeleton />}
        {status === 'fullfield' && (
          <>
            <p className={css.modalTitle}>List of comics</p>
            <ul className={css.charactersListItem}>
              {comicsList?.map(comic => (
                <ModalComicCard key={comic.id} card={comic} />
              ))}
            </ul>
          </>
        )}
        {status === 'pending' && <ComicsListSkeleton />}
      </div>
    </article>
  );
};

export default CharacterModal;
