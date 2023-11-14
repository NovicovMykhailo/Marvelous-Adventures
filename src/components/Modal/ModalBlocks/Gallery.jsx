import { getImage, urlNormalizer } from 'helpers';
import { useState, useEffect, useRef } from 'react';
import useOnLoadImages from 'hooks/useOnLoadImages';

import css from '../ComicsModal/ComicsModal.module.css';


const Gallery = ({ comicsData, stories, setHeight }) => {
  const { thumbnail} = comicsData;
  const [mainPhoto, setMainPhoto] = useState(thumbnail);
  const [fadeProp, setFadeProp] = useState(css.fadeOut);

  const [counter, setCounter] = useState(0);

  const ref = useRef(null);
  const imageContainer = useRef(null);
  const imagesAreLoaded = useOnLoadImages(imageContainer);
  const interval = 4000;

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [imagesAreLoaded, setHeight]);

  // animation
  let galleryItems = stories
    .slice(0, 8)
    .map(({ thumbnail }) => {
      if (!thumbnail.path.includes('image_not_available')) {
        return thumbnail;
      } else {
        return null;
      }
    })
    .reverse();
  const filteredGalleryItems = galleryItems.filter(item => item !== null);

  useEffect(() => {
    setTimeout(()=>{
      setFadeProp(css.fadeIn);
      setCounter(filteredGalleryItems.length);
    }, 500)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    const handle = setInterval(async () => {
      if (counter !== 1) {
      
        setCounter(prev => (prev -= 1));
        setFadeProp(css.fadeOut);
        setTimeout(()=>{
          setMainPhoto(filteredGalleryItems[counter - 1]);
          setFadeProp(css.fadeIn);
        }, 500)
      } else {
        setFadeProp(css.fadeOut);
        setTimeout(()=>{
          setMainPhoto(thumbnail);
          setCounter(filteredGalleryItems.length);
          setFadeProp(css.fadeIn);
        }, 500)
       
      }
    }, interval);

    return () => clearInterval(handle);
  }, [counter, filteredGalleryItems, thumbnail]);

  return (
    <div className={css.photoBlock} ref={ref}>
      <span className={css.imgBG}>
        <img className={`${css.img} ${fadeProp} animate`} src={urlNormalizer(getImage(mainPhoto))} alt="cover" />
      </span>
      <ul className={css.imageGallery} ref={imageContainer}>
        {stories &&
          stories.slice(0, 8).map(({ id, thumbnail, title }) => {
            if (!thumbnail.path.includes('image_not_available')) {
              return (
                <li key={id}>
                  <img
                    className={`${css.galleryImage} animate`}
                    src={urlNormalizer(getImage(thumbnail))}
                    alt="galery"
                    onClick={() => {
                      setMainPhoto(thumbnail);
                      setFadeProp(css.fadeIn);
                    }}
                    title={title}
                  />
                </li>
              );
            } else {
              return null;
            }
          })}
      </ul>
    </div>
  );
};

export default Gallery;
