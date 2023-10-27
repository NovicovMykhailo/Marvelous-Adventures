import css from './HeroCardLeft.module.css';
const HeroCardLeft = ({ color }) => {
  const colors = {
    blue: css.blue,
    red: css.red,
    green: css.green,
  };

  return (
    <div className={`${css.card} ${colors[color]}`}>
      <div className={`${css.charImage}  ${colors[color]}`}></div>
      <span className={css.circle}></span>
      <span className={css.circle}></span>
      <span className={css.circle}></span>
      <span className={css.circle}></span> 
      <span className={css.circle}></span>
    </div>
  );
};

export default HeroCardLeft;
