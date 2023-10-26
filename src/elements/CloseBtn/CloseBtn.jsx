import svg from '../../images/close.svg';
import css from'./CloseBtn.module.css'

const CloseBtn = ({ onClick }) => {
  return (
    <img
      className={css.closeBtn}
      src={svg}
      alt="close button"
      width="28"
      height="28"
      onClick={onClick}
    />
  );
};

export default CloseBtn;

