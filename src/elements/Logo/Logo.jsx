import { motion } from 'framer-motion';
import logo from '../../images/logo.svg';
import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import { imgVariants } from 'elements/Animations/animation-settings';

const Logo = () => {
  return (
    <Link className={css.logoContainer} to={'/'}>
      <motion.img
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        
        className={css.logoImage}
        src={logo}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
