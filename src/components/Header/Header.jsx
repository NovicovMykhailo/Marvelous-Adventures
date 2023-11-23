import Logo from 'elements/Logo/Logo';
import SearchBar from 'elements/SearchBar/SearchBar';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={`${css.header} container`} data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
      <Logo />

      <SearchBar />
    </div>
  );
};

export default Header;
