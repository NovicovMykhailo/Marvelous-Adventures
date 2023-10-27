import fb from '../../images/fb.svg';
import insta from '../../images/insta.svg';
import tweet from '../../images/tweet.svg';
import css from './Socials.module.css';

const Socials = () => {
  return (
    <ul className={css.socials}>
      <li >
        <a className={css.elements} href="facebook.com" target="blank">
          <img className={css.icons} src={fb} alt="fb" width="40" />
        </a>
      </li>
      <li >
        <a className={css.elements} href="instagram.com" target="blank">
          <img className={css.icons} src={insta} alt="insta" width="40" />
        </a>
      </li>
      <li >
        <a className={css.elements} href="tweeter.com" target="blank">
          <img className={css.icons} src={tweet} alt="tweet" width="40" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
