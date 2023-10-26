import { useState, useEffect, useRef } from 'react';
import { getComicsById } from '../../../services/api';
import css from './ComicsModal.module.css';
import CloseBtn from '../../../elements/CloseBtn/CloseBtn';
import Characters from './Characters';
import Creators from './Creators';
import Details from './Details';
import About from './About';
import Gallery from './Gallery';

const ComicsModal = ({ comicsCode, closeModal, openCharackterModal }) => {
  const [comicsData, setComicsData] = useState(null);
  const [creators, setCreators] = useState(null);
  const [characters, setCaracters] = useState(null);
  const [stories, setStories] = useState(null);
  const [height, setHeight] = useState(null);
  const [seriesDesription, setSeriesDesription] = useState(null);

  const descriptionBlock = useRef(null);

  useEffect(() => {
    (async () => {
      const { result, creators, characters, stories, desription } = await getComicsById(comicsCode);
      setComicsData(result);
      setCaracters(characters);
      setCreators(creators);
      setStories(stories);
      setSeriesDesription(desription);
    })();
  }, [comicsCode]);

  function getHeight(galleryHeight) {
    const descriptionBlockheight = descriptionBlock.current.clientHeight;
    if (galleryHeight > descriptionBlockheight) {
      setHeight(`${galleryHeight}px`);
      return;
    }else{
      return;
    }
    
  }

  if (comicsData) {
    return (
      <article className={css.modalCard}>
        <CloseBtn onClick={closeModal} />
        <Gallery stories={stories} comicsData={comicsData} setHeight={getHeight} />
        <div className={css.descriptionBlock} style={{ height: height }} ref={descriptionBlock}>
          {creators?.length > 0 && <About comic={comicsData} creators={creators} seriesAbout={seriesDesription} characters={characters} />}
          <Details comic={comicsData} />
          {creators?.length > 0 && <Creators creators={creators} />}
          {characters?.length > 0 && <Characters characters={characters} openModal={openCharackterModal}/>}
        </div>
      </article>
    );
  }
};

export default ComicsModal;
