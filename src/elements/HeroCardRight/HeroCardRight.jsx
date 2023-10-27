import BottomTab from './BottomTab';
import css from './HeroCardRight.module.css';

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

  return (
    <div className={css.container}>
      <div className={`${css.cardRight} ${colors[color]}`}>
        <span className={css.lines}></span>
        <span className={css.lines}></span>
        <div className={`${css.charImage}  ${colors[color]}`}></div>
        <p className={css.cardName}><span className={css.nameValue}>{names[color]}</span></p>
      </div>
      <span className={css.light}></span>
      <BottomTab color={color} />
    </div>
  );
};

export default HeroCardRight;
