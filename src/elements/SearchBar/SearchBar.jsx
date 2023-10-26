import { useState } from 'react';
import searchIcon from '../../images/search.svg';
import css from './SearchBar.module.css';
const SearchBar = props => {
  const [q, setQ] = useState('');


  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && q !== '') {
      onSubmit();
    } else {
      return;
    }
  });

  function onSubmit() {
    console.log(q);
    setQ('');
  }

  return (
    <div className={css.form}>
      <input className={css.input} type="text" placeholder="search" value={q} onChange={e => setQ(e.target.value)} />
      <img className={css.icon} src={searchIcon} alt="search" onClick={onSubmit} />
    </div>
  );
};

export default SearchBar;
