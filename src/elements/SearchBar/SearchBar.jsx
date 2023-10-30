import { useState } from 'react';
import searchIcon from '../../images/search.svg';
import css from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [q, setQ] = useState('');
const navigate= useNavigate();


  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && q !== '') {
      onSubmit();
    } else {
      return;
    }
  });

  function onSubmit() {
    navigate(`/search/${q}`)

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
