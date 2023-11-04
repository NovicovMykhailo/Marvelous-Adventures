
import CardContainer from './CardContainer/CardContainer';
import CharactersHero from './CharactersHero/CharactersHero';
import SearchForm from 'components/SearchForm/SearchForm';

const CharactersPage = () => {
  return (
    <div data-scroll-section>
      <CharactersHero />
      <SearchForm />
      <CardContainer />
    </div>
  );
};

export default CharactersPage;
