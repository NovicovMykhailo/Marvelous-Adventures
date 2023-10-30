import HeroSlider from './Hero/HeroSwiper/HeroSlider';
import LastComicsSlider from './LastComics/LastComicsSlider/LastComicsSlider';


const HomePage = () => {
  return (
    <>
      <h1 className="visuallyHidden">Web-based platform: Marvelous Adventures</h1>
      <HeroSlider />
      <LastComicsSlider />
    </>
  );
};

export default HomePage;
