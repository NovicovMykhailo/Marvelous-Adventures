import { useState } from 'react';
import CardContainer from './CardContainer/CardContainer';
import CharactersHero from './CharactersHero/CharactersHero';
import SearchForm from 'components/SearchForm/SearchForm';

const CharactersPage = props => {
  const [isChanged, setIsChanged] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div data-scroll-section>
      <CharactersHero />
      <SearchForm isSet={setIsChanged} disabled={isDisabled} />
      <CardContainer cardLimit={props.limit} isFormSearch={isChanged} isFormDisabled={setIsDisabled} />
    </div>
  );
};

export default CharactersPage;
