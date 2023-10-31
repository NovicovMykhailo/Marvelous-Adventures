import css from './HeroCardLeft.module.css';
const HeroCardLeft = ({ color }) => {
  const colors = {
    blue: css.blue,
    red: css.red,
    green: css.green,
  };
  const paralaxDuration  = "3500"

  return (
    <div
      className={`${css.card} ${colors[color]}`}
      data-swiper-parallax-y="-300"
      data-swiper-parallax-duration={paralaxDuration}
    >
      <div
        className={`${css.charImage}  ${colors[color]}`}
        data-swiper-parallax-y="400"
        data-swiper-parallax-duration={paralaxDuration}
      ></div>
      <span
        className={css.circle}
        data-swiper-parallax-x="-100"
        data-swiper-parallax-duration={paralaxDuration}
      ></span>
      <span
        className={css.circle}
        data-swiper-parallax-x="-200"
        data-swiper-parallax-duration={paralaxDuration}
      ></span>
      <span
        className={css.circle}
        data-swiper-parallax-x="-300"
        data-swiper-parallax-duration={paralaxDuration}
      ></span>
      <span
        className={css.circle}
        data-swiper-parallax-x="-400"
        data-swiper-parallax-duration={paralaxDuration}
      ></span>
      <span
        className={css.circle}
        data-swiper-parallax-x="-500"
        data-swiper-parallax-duration={paralaxDuration}
      ></span>
    </div>
  );
};

export default HeroCardLeft;
