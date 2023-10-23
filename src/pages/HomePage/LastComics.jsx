import { getCharacters } from 'services/api';
import { useEffect, useState } from 'react';
import { getImage } from 'helpers/imageConverter';

const LastComics = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    (async () => {
      const data = await getCharacters();

      setData(data.results);
    })();
  }, []);
  return (
    <div>
      LastComics
      <ul style={style.grid}>
        {data &&
          data.map(card => (
            <li key={card.title} style={style.flex}>
              <p>{card.title}</p>

              <img src={getImage(card.thumbnail)} alt="character" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LastComics;

const style = {
  div: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 24,
    color: '#010101',
    gap: '24px',
  },
  grid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '24px',
  },
  flex: {
    flexGrow: '400px',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px',
  },
};
