import { useState } from 'react';
import searchIcon from '../../images/search.svg';
import css from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();


  const onKeyDown = e => {
    if(e.target.name === 'searchBar'){  
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        onSubmit();
      }
    }
  
  };

  function onSubmit() {
    navigate(`/search`, { state: { name: `${q.toLowerCase()}`, type: 'searchBar' } });
    setQ('');
  }

  return (
    <div className={css.form}>
      <input
        className={css.input}
        type="text"
        name="searchBar"
        placeholder="search"
        onKeyDown={onKeyDown}
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <img className={css.icon} src={searchIcon} alt="search" onClick={onSubmit} />
    </div>
  );
};

export default SearchBar;
