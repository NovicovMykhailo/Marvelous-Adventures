import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CardContainer from './CardContainer/CardContainer';
import CharactersHero from './CharactersHero/CharactersHero';
import SearchForm from 'components/SearchForm/SearchForm';
import LoadAnimation from 'elements/Animations/LoadAnimation';

const CharactersPage = props => {
  const [isChanged, setIsChanged] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <LoadAnimation>
      <div data-scroll-section>
        <CharactersHero />
        <SearchForm isSet={setIsChanged} disabled={isDisabled} />
        <AnimatePresence>
          <CardContainer cardLimit={props.limit} isFormSearch={isChanged} isFormDisabled={setIsDisabled} />
        </AnimatePresence>
      </div>
    </LoadAnimation>
  );
};

export default CharactersPage;
