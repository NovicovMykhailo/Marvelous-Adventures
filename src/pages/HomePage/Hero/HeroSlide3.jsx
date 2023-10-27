import { Link } from 'react-router-dom';
import css from './HeroSlide.module.css';
import HeroCardLeft from 'elements/HeroCardLeft/HeroCardLeft';
import HeroCardRight from 'elements/HeroCardRight/HeroCardRight';
const HeroSlide3 = () => {
  return (
    <div className={`${css.slide} ${css.green}`}>
      <article className={css.infoBlock}>
        <p className={css.about}>Web-based platform</p>
        <h2 className={css.title}>Marvelous Adventures</h2>
        <p className={css.description}>
          is a web-based platform that provides an immersive experience for users to explore and discover a vast collection of Marvel
          characters and comics. Start exploring the Marvelous Adventures now by visiting our Characters and Comics sections and discover
          your new favorites today.
        </p>
        <Link to={'/search'} className={`${css.slideBtn} ${css.green}`}>All comics</Link>
      </article>
      <div className={css.imageBlock}>
        <HeroCardLeft color={'green'} />
        <HeroCardRight color={'green'}/>
      </div>
    </div>
  );
};

export default HeroSlide3;
