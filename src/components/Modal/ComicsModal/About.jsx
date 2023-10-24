import css from './ComicsModal.module.css';
import dateFormatter from 'helpers/dateFormater';
import formatTitle from 'helpers/formatTitle';

const About = ({ comic, creators }) => {
  const { description, title } = comic;
  if (creators[0]) {
    const date = dateFormatter(creators[0].modified) || 'date unknown';
    return (
      <div>
        <div className={css.aboutHeader}>
          <h3 className={css.modalTitle}>{formatTitle(title)}</h3>
          <ul className={css.authorDetailTitle}>
            <li>{creators[0].fullName || 'author unknown'}</li>
            <li>{date}</li>
          </ul>
        </div>

        {description ? (
          <p className={css.modalText}>{description}</p>
        ) : (
          <p className={css.modalText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti consectetur eos eum delectus necessitatibus optio
            corrupti possimus atque, natus neque ad voluptatibus minus? Omnis perferendis neque aut error fugiat, suscipit officiis veniam
            tenetur quas deleniti debitis atque? Deleniti commodi sit delectus esse illum qui, omnis tempora? Fugiat, corrupti doloribus?
          </p>
        )}
      </div>
    );
  }else{
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
        ) : (
          <p className={css.modalText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti consectetur eos eum delectus necessitatibus optio
            corrupti possimus atque, natus neque ad voluptatibus minus? Omnis perferendis neque aut error fugiat, suscipit officiis veniam
            tenetur quas deleniti debitis atque? Deleniti commodi sit delectus esse illum qui, omnis tempora? Fugiat, corrupti doloribus?
          </p>
        )}
      </div>
    );

  }
};

export default About;


function formatUnknownYear(string){
  const indexEnd = string.indexOf(')');
  const indexStart = string.indexOf('(')+1;
  return string.slice(indexStart, indexEnd)
}