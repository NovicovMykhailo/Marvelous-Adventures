import { Outlet } from 'react-router-dom';
import { MouseSmooth } from 'react-mouse-smooth';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';


const SharedLayout = () => {
  MouseSmooth({ time: 2000, size: 100 });

  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <License />
    </div>
  );
};

export default SharedLayout;
