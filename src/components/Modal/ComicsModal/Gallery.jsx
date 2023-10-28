import { getImage } from 'helpers/imageConverter';
import { useState, useEffect, useRef } from 'react';
import useOnLoadImages from 'hooks/useOnLoadImages';
import css from './ComicsModal.module.css';

const Gallery = ({ comicsData, stories, setHeight }) => {
  const { thumbnail, images } = comicsData;
  const [mainPhoto, setMainPhoto] = useState(thumbnail);
  const [fadeProp, setFadeProp] = useState(css.fadeOut);

  const ref = useRef(null);
  const imageContainer = useRef(null);
  const imagesAreLoaded = useOnLoadImages(imageContainer);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [imagesAreLoaded, setHeight]);

  // animation
  let galleryItems = stories
    .map(({ thumbnail }) => {
      if (!thumbnail.path.includes('image_not_available')) {
        return thumbnail;
      } else {
        return null;
      }
    })
    .reverse();

 
  const interval = 5000;

  useEffect(() => {
    switcher();
  }, [setHeight]);

  useEffect(() => {
    let i = galleryItems.length;
    const handle = setInterval(() => {
      if (i !== 1) {
        i -= 1;
        setMainPhoto(galleryItems[i]);
        switcher();
      } else {
        setFadeProp(css.fadeIn);
        setMainPhoto(thumbnail);
      }
    }, interval);

    return () => clearInterval(handle);
  }, [galleryItems, thumbnail]);

  const switcher = () => {
    setFadeProp(css.fadeIn);
    setTimeout(() => setFadeProp(css.fadeOut), interval - 1000);
  };

  return (
    <div className={css.photoBlock} ref={ref}>
      <span className={css.imgBG}>
        <img className={`${css.img} ${fadeProp}`} src={getImage(mainPhoto)} alt="cover" />
      </span>

      <div>
        {images?.length > 0 &&
          images.map(image => {
            if (image.path !== thumbnail.path) {
              return <img className={css.imageThumbs} src={getImage(image)} alt="sample" />;
            } else return null;
          })}
      </div>
      <ul className={css.imageGallery} ref={imageContainer}>
        {stories &&
          stories.slice(0,10).map(({ id, thumbnail, title }) => {
            if (!thumbnail.path.includes('image_not_available')) {
              return (
                <li key={id}>
                  <img
                    className={css.galleryImage}
                    src={getImage(thumbnail)}
                    alt="galery"
                    onClick={() => setMainPhoto(thumbnail)}
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
