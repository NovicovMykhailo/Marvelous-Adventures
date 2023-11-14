export const pVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export const h2Varians = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const imgVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export const cardVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
};
