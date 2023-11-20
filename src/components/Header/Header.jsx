import Logo from 'elements/Logo/Logo';
import SearchBar from 'elements/SearchBar/SearchBar';
import css from './Header.module.css';
import AudioPlayer from 'elements/AudioPlayer/AudioPlayer';
const Header = () => {
  return (
    <div className={`${css.header} container`} data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
      <Logo />
      <AudioPlayer />
      <SearchBar />
    </div>
  );
};

export default Header;
