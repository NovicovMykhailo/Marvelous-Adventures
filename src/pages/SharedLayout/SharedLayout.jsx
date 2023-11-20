import { Outlet } from 'react-router-dom';
import ModalProvider from 'components/Modal/ModalContext/ModalContext';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';
import AnimationProvider from 'elements/Animations/AnimationContext';

const SharedLayout = () => {
  return (
    <div>
      <ModalProvider>
        <div className="container">
          <AnimationProvider>
            <Header />
            <Outlet />
            <Footer />
          </AnimationProvider>
        </div>
      </ModalProvider>
      <License />
    </div>
  );
};

export default SharedLayout;
