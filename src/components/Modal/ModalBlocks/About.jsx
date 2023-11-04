import css from '../ComicsModal/ComicsModal.module.css'
import { dateFormater, blockSplitter, formatTitle, lorem } from 'helpers';

const About = ({ comic, creators, seriesAbout, characters }) => {
  const characterDescription = characters[0]?.description;
  const { description, title } = comic;
  if (creators[0]) {
    const date = dateFormater(creators[0].modified) || 'date unknown';
    return (
      <div>
        <div className={css.aboutHeader}>
          <h3 className={css.modalTitle}>{formatTitle(title)}</h3>
          <ul className={css.authorDetailTitle}>
            <li>{creators[0].fullName || 'author unknown'}</li>
            <li className={css.decoLine}></li>
            <li>{date}</li>
          </ul>
        </div>

        {description ? (
          <ul className={css.modalText}>{blockSplitter(description)}</ul>
        ) : seriesAbout ? (
          <ul className={css.modalText}>{blockSplitter(seriesAbout)}</ul>
        ) : characterDescription ? (
          <ul className={css.modalText}>{blockSplitter(characterDescription)}</ul>
        ) : (
          <ul className={css.modalText}>{blockSplitter(lorem)}</ul>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <div className={css.aboutHeader}>
          <h3 className={css.modalTitle}>{formatTitle(title)}</h3>
          <ul className={css.authorDetailTitle}>
            <li>Not specified</li>
            <li>{formatUnknownYear(title)}</li>
          </ul>
        </div>

        {description ? (
          <p className={css.modalText}>{description}</p>
        ) : seriesAbout ? (
          <p className={css.modalText}>{seriesAbout}</p>
        ) : characterDescription ? (
          <p className={css.modalText}>{characterDescription}</p>
        ) : (
          <ul className={css.modalText}>{blockSplitter(lorem)}</ul>
        )}
      </div>
    );
  }
};

export default About;

function formatUnknownYear(string) {
  const indexEnd = string.indexOf(')');
  const indexStart = string.indexOf('(') + 1;
  return string.slice(indexStart, indexEnd);
}

