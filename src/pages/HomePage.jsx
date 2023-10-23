import { getHomePageChar } from 'services/api';
import { useEffect, useState } from 'react';
import { getImage } from 'helpers/imageConverter';

const HomePage = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    (async () => {
      const data = await getHomePageChar();

      setData(data.results);
    })();
  }, []);
  return (
    <div style={style.div}>
      HomePage
      <ul style={style.grid}>
        {data &&
          data.map(card => (
            <li key={card.name} style={style.flex}>
              <p>{card.name}</p>

              <img src={getImage(card.thumbnail)} alt="character" />
              {/* <p>{card.description}</p> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;

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
    maxWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px',
  },
};
