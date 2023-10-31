import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CharactersPage from 'pages/CharactersPage/CharactersPage';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { QueryClientProvider, QueryClient } from 'react-query';
export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<CharactersPage />} />
          <Route path="/search/:name" element={<CharactersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </QueryClientProvider>
  );
};
