import { useState, useEffect } from 'react';
import { getComicsById } from '../../../services/api';
import { getImage } from 'helpers/imageConverter';
import css from './ComicsModal.module.css';
import CloseBtn from './../../../elements/CloseBtn';
import Characters from './Characters';
import Creators from './Creators';
import Details from './Details';
import About from './About';
import Gallery from './Gallery';

const ComicsModal = ({ comicsCode, closeModal }) => {
  const [comicsData, setComicsData] = useState(null);
  const [creators, setCreators] = useState(null);
  const [characters, setCaracters] = useState(null);
  const [stories, setStories] = useState(null);

  useEffect(() => {
    (async () => {
      const { result, creators, characters, stories } = await getComicsById(comicsCode);
      setComicsData(result);
      setCaracters(characters);
      setCreators(creators);
      setStories(stories);
    })();
  }, [comicsCode]);

  if (comicsData) {
    return (
      <article className={css.modalCard}>
        <CloseBtn onClick={closeModal} />
        <Gallery stories={stories} comicsData={comicsData} />
        <div className={css.descriptionBlock}>
          {creators?.length > 0 && <About comic={comicsData} creators={creators} />}
          <Details comic={comicsData} />
          {creators?.length > 0 && <Creators creators={creators} />}
          {characters?.length > 0 && <Characters characters={characters} />}
        </div>
      </article>
    );
  }
};

export default ComicsModal;
