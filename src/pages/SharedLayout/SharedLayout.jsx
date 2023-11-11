import { Outlet } from 'react-router-dom';
import ModalProvider from 'components/Modal/ModalContext/ModalContext';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';


const SharedLayout = () => {

 
  return (
    <div>
      <ModalProvider>
        <div className="container">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ModalProvider>
      <License />
    </div>
  );
};

export default SharedLayout;
