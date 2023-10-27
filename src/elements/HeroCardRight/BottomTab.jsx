import css from './HeroCardRight.module.css';

const BottomTab = ({ color }) => {
  let descriptions;
  if (color === 'blue') {
    descriptions =
      "T'Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.";
  } else if (color === 'red') {
    descriptions =
      "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.";
  } else if (color === 'green') {
    descriptions =
      "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.";
  }

  return (
    <div className={css.bottomTab}>
      <p className={css.characters}>Characters</p>
      <p className={css.description}>{descriptions}</p>
    </div>
  );
};

export default BottomTab;
