import { Outlet } from 'react-router-dom';
import ModalProvider from 'components/Modal/ModalContext/ModalContext';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import License from 'components/Footer/License/License';
import AnimationProvider from 'elements/Animations/AnimationContext';
import AudioPlayer from 'elements/AudioPlayer/AudioPlayer';

const SharedLayout = () => {
  return (
    
      <ModalProvider>
        <div className="container">
        <AnimationProvider>
            <Header />
            <AudioPlayer />
            <Outlet />
            <Footer />
        </AnimationProvider>
        </div>
        <License />
     </ModalProvider>
   
  );
};

export default SharedLayout;
