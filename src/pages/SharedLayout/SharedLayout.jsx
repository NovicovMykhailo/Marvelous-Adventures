import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';
const SharedLayout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <License />
    </>
  );
};

export default SharedLayout;
