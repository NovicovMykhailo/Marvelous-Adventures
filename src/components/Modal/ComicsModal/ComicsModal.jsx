import { useState, useEffect, useRef } from 'react';
import { getComicsById } from '../../../services/api';
import css from './ComicsModal.module.css';
import CloseBtn from '../../../elements/CloseBtn/CloseBtn';
import { AboutSkeleton, CreatorsSkeleton, DetailsSkeleton, GallerySkeleton, CharacktersSkeleton } from '../Skeletons';
import { Characters, Creators, Details, About, Gallery } from '../ModalBlocks';

const ComicsModal = ({ comicsCode, closeModal }) => {
  const [comicsData, setComicsData] = useState(null);
  const [creators, setCreators] = useState(null);
  const [characters, setCaracters] = useState(null);
  const [stories, setStories] = useState(null);
  const [height, setHeight] = useState(null);
  const [seriesDesription, setSeriesDesription] = useState(null);

  const [status, setStatus] = useState('init');

  const descriptionBlock = useRef(null);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      const { result, creators, characters, stories, desription } = await getComicsById(comicsCode);
      setComicsData(result);
      setCaracters(characters);
      setCreators(creators);
      setStories(stories);
      setSeriesDesription(desription);
      setStatus('fullfield');
    })();
  }, [comicsCode]);

  function getHeight(galleryHeight) {
    const descriptionBlockheight = descriptionBlock.current.clientHeight;
    if (galleryHeight > descriptionBlockheight) {
      setHeight(`${galleryHeight}px`);
      return;
    } else {
      return;
    }
  }

  return (
    <article className={css.modalCard}>
      <CloseBtn onClick={closeModal} />
      {status === 'fullfield' && <Gallery stories={stories} comicsData={comicsData} setHeight={getHeight} />}
      {status === 'pending' && <GallerySkeleton />}
      <div className={css.descriptionBlock} style={{ height: height }} ref={descriptionBlock}>
        {status === 'fullfield' && creators?.length > 0 && (
          <About comic={comicsData} creators={creators} seriesAbout={seriesDesription} characters={characters} />
        )}
        {status === 'pending' && <AboutSkeleton />}
        {status === 'fullfield' && <Details comic={comicsData} />}
        {status === 'pending' && <DetailsSkeleton />}
        {status === 'fullfield' && creators?.length > 0 && <Creators creators={creators} />}
        {status === 'pending' && <CreatorsSkeleton />}
        {status === 'fullfield' && characters?.length > 0 && <Characters characters={characters} />}
        {status === 'pending' && <CharacktersSkeleton />}
      </div>
    </article>
  );
};

export default ComicsModal;
