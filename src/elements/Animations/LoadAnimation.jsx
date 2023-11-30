import { motion } from 'framer-motion';

const LoadAnimation = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'linear', duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default LoadAnimation;
