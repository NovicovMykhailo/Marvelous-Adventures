import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CharactersPage from 'pages/CharactersPage/CharactersPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';

import { MouseSmooth } from 'react-mouse-smooth';
import useWindowDimensions from 'hooks/useWindowResize';
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  const { width } = useWindowDimensions();

  let limit = width >= 1100 ? 16 : width < 500 ? 5 : 8;

  width >= 1440 && MouseSmooth({ time: 1000, size: 100 });
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<CharactersPage limit={limit > 0 && limit} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   </AnimatePresence>
  );
};
