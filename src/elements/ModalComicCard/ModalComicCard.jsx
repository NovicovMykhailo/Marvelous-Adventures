import { Link } from 'react-router-dom';
import { getImage, pageToTop, urlNormalizer } from 'helpers';
import { useContext } from 'react';
import { ModalContext } from 'components/Modal/ModalContext/ModalContext';
import css from './ModalComicCard.module.css';
import { motion } from 'framer-motion';
import { cardVariants } from 'elements/Animations/animation-settings';


const ModalComicCard = ({ card, i }) => {
  const { title, thumbnail, creators } = card;
  const { closeAllModals } = useContext(ModalContext);

  const authors = creators.items.filter(author => author.role === 'writer');
  const index = title.includes(', ') ? title.indexOf(',') - 1 : title.indexOf('(') - 1;

  return (
    <Link
      to={'/search'}
      state={{ name: `${title.slice(0, index).toLowerCase()}`, type: 'searchBar' }}
      onClick={() => {setTimeout(closeAllModals(), 1000); pageToTop()}}
      className={`${css.card}`}
      title={`${title} \nby: ${authors.map(author => author.name).join(' and ')}`}
    >
      <motion.div       variants={cardVariants}
      animate="visible"
      initial="hidden"
      custom={i} 
      className={css.cardImageBlock}>
        <img className={`${css.cardImage}`} src={urlNormalizer(getImage(thumbnail))} alt="character" />
      </motion.div>

      <ul className={css.cardBottomTab}>
        <li className={css.cardTitle}>{title}</li>
        <li className={css.cardAuthor}>{authors.map(author => author.name).join(', ')}</li>
      </ul>
    </Link>
  );
};

export default ModalComicCard;
