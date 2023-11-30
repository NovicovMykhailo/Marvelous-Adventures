import LoadAnimation from 'elements/Animations/LoadAnimation';
import HeroSlider from './Hero/HeroSwiper/HeroSlider';
import LastComicsSlider from './LastComics/LastComicsSlider/LastComicsSlider';

const HomePage = () => {
  return (
    <LoadAnimation>
      <h1 className="visuallyHidden">Web-based platform: Marvelous Adventures</h1>
      <HeroSlider />
      <LastComicsSlider />
    </LoadAnimation>
  );
};

export default HomePage;
