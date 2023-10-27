import Logo from 'elements/Logo/Logo';
import css from './Footer.module.css';
import Socials from 'elements/Socials/Socials';

const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <Logo />
        <h3 className={css.comics}>Comics</h3>
        <Socials />
      </div>
      <div className={css.liscenceBlock}>
        <h4 className={css.liscence}>Privacy Policy Public Offering Agreement</h4>
      </div>
    </>
  );
};

export default Footer;
