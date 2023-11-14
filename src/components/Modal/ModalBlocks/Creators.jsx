
import { getImage } from 'helpers';
import css from '../ComicsModal/ComicsModal.module.css'


const Creators = ({ creators }) => {
  const filteredCreators = creators.filter(creator => creator !== undefined)
  if (creators) {
    
    return (
      <div>
        <h3 className={css.modalTitle}>Creator</h3>
        <ul className={css.creatorsBlock}>
          {filteredCreators.map(creator => {
            const { id, thumbnail, fullName } = creator;
            return (
              <li key={id} className={css.creatorCard}>
                <img className={css.creatorImage} src={getImage(thumbnail, 'med_Sq')} alt="author" title={fullName}></img>
                <div className={css.creatorDescr}>
                  <p className={css.creatorRole}>Writer</p>
                  <p className={css.modalText}>{fullName}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className={css.modalTitle}>Creator</h3>
        <ul className={css.creatorsBlock}>
          <li className={css.creatorCard}>
          <div className={css.creatorImage} style={{backgroundColor:"#fafafa1f"}}></div> 
            <div className={css.creatorDescr}>
              <p className={css.creatorRole}>Writer</p>
              <p className={css.modalText}>not specified</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Creators;
