import { getImage, urlNormalizer } from 'helpers';
import css from './ComicsCard.module.css';
import { motion } from 'framer-motion';
import { cardVariants } from 'elements/Animations/animation-settings';

const ComicsCard = ({ card, openModal, size , i}) => {
  const { title, thumbnail, creators, id } = card;

  const styles = {
    hero: css.hero,
    basic: css.basic,
  };

  const authors = creators.items.filter(author => author.role === 'writer');

  return (
    <motion.div
      variants={cardVariants}
      animate="visible"
      initial="hidden"
      custom={i}
      className={`${css.card} ${styles[size]}`}
      onClick={() => openModal(id)}
      title={`${title} \nby: ${authors.map(author => author.name).join(' and ')}`}
    >
      <img className={`${css.cardImage}`} src={urlNormalizer(getImage(thumbnail))} alt="character" />
      <ul className={css.cardBottomTab}>
        <li className={css.cardTitle}>{title}</li>
        <li className={css.cardAuthor}>{authors.map(author => author.name).join(', ')}</li>
      </ul>
    </motion.div>
  );
};

export default ComicsCard;
