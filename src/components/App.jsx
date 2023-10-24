import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
export const App = () => {
  const CharactersPage = lazy(() => import('../pages/CharactersPage'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/serch" element={<CharactersPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
