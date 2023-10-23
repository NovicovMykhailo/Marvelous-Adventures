import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CharactersPage from 'pages/CharactersPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/serch" element={<CharactersPage />} />
      </Route>
    </Routes>
  );
};
