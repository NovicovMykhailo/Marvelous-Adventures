import css from './CharactersHero.module.css';
import GoBackBtn from 'elements/GoBackBtn/GoBackBtn';

const CharactersHero = props => {
  return (
    <div className={css.charHero}>
      <article className={css.infoBlock}>
        <p className={css.about}>Web-based platform</p>
        <h2 className={css.title}>Comics</h2>
        <p className={css.description}>
          Comics is a medium used to express ideas with images, often combined with text or other visual information.
        </p>
      </article>
      <GoBackBtn />
    </div>
  );
};

export default CharactersHero;
