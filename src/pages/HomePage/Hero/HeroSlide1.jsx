import { Link } from 'react-router-dom';
import css from './HeroSlide.module.css';
import HeroCardLeft from 'elements/HeroCardLeft/HeroCardLeft';
import HeroCardRight from 'elements/HeroCardRight/HeroCardRight';
import useWindowResize from 'hooks/useWindowResize';
const HeroSlide1 = () => {
  const { width } = useWindowResize();

  const paralaxDuration = width < 1400 ? '800' : '3000';

  return (
    <div className={`${css.slide} ${css.blue}`}>
      <article
        className={css.infoBlock}
        data-swiper-parallax-y={width >= 1400 ? '-300' : '0'}
        data-swiper-parallax-x={width < 1400 ? '-300' : '0'}

        data-swiper-parallax-duration={paralaxDuration}
      >
        <p
          className={css.about}
          data-swiper-parallax-y={width >= 1400 ? '-300' : '0'}
          data-swiper-parallax-x={width < 1400 ? '-300' : '0'}
          data-swiper-parallax-duration={`${Number(paralaxDuration) - Number(paralaxDuration) / 6}`}
        >
          Web-based platform
        </p>
        <h2
          className={css.title}
          data-swiper-parallax-y={width >= 1400 ? '-300' : '0'}
          data-swiper-parallax-x={width < 1400 ? '-300' : '0'}
          data-swiper-parallax-duration={`${Number(paralaxDuration) + Number(paralaxDuration) / 3}`}
        >
          Marvelous Adventures
        </h2>
        <p
          className={css.description}
          data-swiper-parallax-y={width >= 1400 ? '-300' : '0'}
          data-swiper-parallax-x={width < 1400 ? '-300' : '0'}
          data-swiper-parallax-duration={`${Number(paralaxDuration) + Number(paralaxDuration) / 2}`}
        >
          is a web-based platform that provides an immersive experience for users to explore and discover a vast
          collection of Marvel characters and comics. Start exploring the Marvelous Adventures now by visiting our
          Characters and Comics sections and discover your new favorites today.
        </p>
        <Link
          to={'/search'}
          className={`${css.slideBtn} ${css.blue}`}
          data-swiper-parallax-y={width >= 1400 ? '-400' : '0'}
          data-swiper-parallax-x={width < 1400 ? '-400' : '0'}
          data-swiper-parallax-duration={`${Number(paralaxDuration) + Number(paralaxDuration) / 1.5}`}
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
