import { Link } from 'react-router-dom';
import css from './HeroSlide.module.css';
import HeroCardLeft from 'elements/HeroCardLeft/HeroCardLeft';
import HeroCardRight from 'elements/HeroCardRight/HeroCardRight';
const HeroSlide1 = () => {
  const paralaxDuration = '3000';

  return (
    <div className={`${css.slide} ${css.blue}`}>
      <article className={css.infoBlock} data-swiper-parallax-y="-300" data-swiper-parallax-duration={paralaxDuration}>
        <p className={css.about} data-swiper-parallax-y="-300" data-swiper-parallax-duration={`${Number(paralaxDuration) - 500}`}>
          Web-based platform
        </p>
        <h2 className={css.title} data-swiper-parallax-y="-300" data-swiper-parallax-duration={`${Number(paralaxDuration) + 1000}`}>
          Marvelous Adventures
        </h2>
        <p className={css.description} data-swiper-parallax-y="-300" data-swiper-parallax-duration={`${Number(paralaxDuration) + 1500}`}>
          is a web-based platform that provides an immersive experience for users to explore and discover a vast collection of Marvel
          characters and comics. Start exploring the Marvelous Adventures now by visiting our Characters and Comics sections and discover
          your new favorites today.
        </p>
        <Link
          to={'/search'}
          className={`${css.slideBtn} ${css.blue}`}
          data-swiper-parallax-y="-400"
          data-swiper-parallax-duration={`${Number(paralaxDuration) + 2000}`}
        >
          All comics
        </Link>
      </article>
      <div className={css.imageBlock}>
        <HeroCardLeft color={'blue'} />
        <HeroCardRight color={'blue'} />
      </div>
    </div>
  );
};

export default HeroSlide1;
