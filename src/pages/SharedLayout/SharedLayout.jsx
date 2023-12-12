import { Outlet } from 'react-router-dom';
import ModalProvider from 'components/Modal/ModalContext/ModalContext';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';
import AnimationProvider from 'elements/Animations/AnimationContext';
import AudioPlayer from 'elements/AudioPlayer/AudioPlayer';

const SharedLayout = () => {
  return (
    <div>
    <AnimationProvider>
      <ModalProvider>
        <div className="container">
            <Header />
            <AudioPlayer />
            <Outlet />
            <Footer />
        </div>
      </ModalProvider>
     </AnimationProvider>
     <License />
    </div>
  );
};

export default SharedLayout;
