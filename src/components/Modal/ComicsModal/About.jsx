import css from './ComicsModal.module.css';
import dateFormatter from 'helpers/dateFormater';
import formatTitle from 'helpers/formatTitle';
import blockSplitter from 'helpers/blockSplitter';

const About = ({ comic, creators, seriesAbout, characters }) => {
  const characterDescription = characters[0]?.description;
  const { description, title } = comic;
  if (creators[0]) {
    const date = dateFormatter(creators[0].modified) || 'date unknown';
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

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit, blanditiis, deleniti consectetur eos eum delectus necessitatibus optio corrupti possimus atque, natus neque ad voluptatibus minus? Omnis perferendis neque aut error fugiat, suscipit officiis veniam tenetur quas deleniti debitis atque?';
