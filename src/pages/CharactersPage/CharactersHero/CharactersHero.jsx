import css from './CharactersHero.module.css';
import GoBackBtn from 'elements/GoBackBtn/GoBackBtn';
import { motion } from 'framer-motion';
import { pVariants, h2Varians } from 'elements/Animations/animation-settings';

const CharactersHero = props => {

  return (
    <div className={css.charHero}>
      <article className={css.infoBlock}>
        <motion.p
          className={css.about}
          variants={pVariants}
          animate="visible"
          transition={{ duration: 0.5 }}
          initial="hidden"
        >
          Web-based platform
        </motion.p>
        <motion.h2
          variants={h2Varians}
          animate="visible"
          initial="hidden"
          transition={{ delay: 0.5, duration: 0.5 }}
          className={css.title}
        >
          Comics
        </motion.h2>
        <motion.p
          variants={pVariants}
          animate="visible"
          initial="hidden"
          transition={{ delay: 0.7, duration: 0.5 }}
          className={css.description}
        >
          Comics is a medium used to express ideas with images, often combined with text or other visual information.
        </motion.p>
      </article>
      <GoBackBtn />
    </div>
  );
};

export default CharactersHero;
