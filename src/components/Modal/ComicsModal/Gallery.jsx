import { getImage } from 'helpers/imageConverter';
import css from './ComicsModal.module.css';
import { useState } from 'react';

const Gallery = ({ comicsData, stories }) => {
  const { thumbnail, images } = comicsData;
  const [mainPhoto, setMainPhoto] = useState(thumbnail);

  return (
    <div className={css.photoBlock}>
      <img className={css.img} src={getImage(mainPhoto)} alt="cover" />
      <div>
        {images?.length > 0 &&
          images.map(image => {
            if (image.path !== thumbnail.path) {
              return <img className={css.imageThumbs} src={getImage(image)} alt="sample" />;
            } else return null;
          })}
      </div>
      <ul className={css.imageGallery}>
        {stories &&
          stories.map(({ id, thumbnail, title }) => {
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
