import BottomTab from './BottomTab';
import css from './HeroCardRight.module.css';
import { isSpiderName } from 'helpers';
import { Link } from 'react-router-dom';

const HeroCardRight = ({ color }) => {
  const colors = {
    blue: css.blue,
    red: css.red,
    green: css.green,
  };
  const names = {
    blue: 'Black Panther',
    red: 'Spider man',
    green: 'Hulk',
  };
  // const paralaxDuration = '3000';

  return (
    <div className={css.container}>
      <div
        className={`${css.cardRight} ${colors[color]}`}
        // data-swiper-parallax-x="300"
        // data-swiper-parallax-duration={paralaxDuration}
      >
        <span className={css.lines}></span>
        <span className={css.lines}></span>
        <div
          className={`${css.charImage}  ${colors[color]}`}
          // data-swiper-parallax-y="-300"
          // data-swiper-parallax-duration={paralaxDuration}
        ></div>
        <Link
          to={'/search'}
          state={{ name: `${isSpiderName(names[color].toLowerCase())}` }}
          className={css.cardName}
          // data-swiper-parallax-x="300"
          // data-swiper-parallax-duration={paralaxDuration}
        >
          <span
            className={css.nameValue}
            // data-swiper-parallax-scale="0.15"
            // data-swiper-parallax-duration={`${Number(paralaxDuration) + 500}`}
          >
            {names[color]}
          </span>
        </Link>
      </div>
      <span className={css.light} id={css['lightBulb']}></span>
      <BottomTab color={color} />
    </div>
  );
};

export default HeroCardRight;
