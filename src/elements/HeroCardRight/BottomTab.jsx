import css from './HeroCardRight.module.css';

const BottomTab = ({ color }) => {
  let descriptions;
  const paralaxDuration = '3000';

  if (color === 'blue') {
    descriptions =
      "T'Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.";
  } else if (color === 'red') {
    descriptions =
      'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.';
  } else if (color === 'green') {
    descriptions =
      'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.';
  }

  return (
    <div className={css.bottomTab} data-swiper-parallax-opacity="-1" data-swiper-parallax-duration={paralaxDuration}>
      <p className={css.characters} data-swiper-parallax-scale="0.15" data-swiper-parallax-duration={paralaxDuration}>
        Characters
      </p>
      <p className={css.description} data-swiper-parallax-scale="0.05" data-swiper-parallax-duration={paralaxDuration}>
        {descriptions}
      </p>
    </div>
  );
};

export default BottomTab;
