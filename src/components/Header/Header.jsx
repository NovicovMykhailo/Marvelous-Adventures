import Logo from 'elements/Logo/Logo';
import SearchBar from 'elements/SearchBar/SearchBar';
import css from './Header.module.css'
const Header = props => {
  return (
    <div className={`${css.header} container`}> 
      <Logo/>
      <SearchBar />
    </div>
  );
};

export default Header;
