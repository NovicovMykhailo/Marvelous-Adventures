import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CharactersPage from 'pages/CharactersPage/CharactersPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';

import { MouseSmooth } from 'react-mouse-smooth';
import useWindowDimensions from 'hooks/useWindowResize';
import { useEffect, useState } from 'react';

export const App = () => {
  const { width } = useWindowDimensions();
  const [limit, setLimit] = useState(null);

  useEffect(() => {
    const mobile = Boolean(width < 768 && limit !== 5);
    const tablet = Boolean(width >= 768 && width < 1100 && limit !== 8);
    const desktop = Boolean(width >= 1100 && limit !== 16);
    mobile && setLimit(5);
    tablet && setLimit(8);
    desktop && setLimit(16);
    
 
  }, [limit, width]);


  MouseSmooth({ time: 2000, size: 100 });
  return (

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<CharactersPage limit={16}/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

  );
};
