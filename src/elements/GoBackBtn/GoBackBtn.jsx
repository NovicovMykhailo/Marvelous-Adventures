import css from './GoBackBtn.module.css'
import { Link } from 'react-router-dom';

const GoBackBtn = () => {
  return <Link to="/" className={css.goBackBtn}>back home</Link>;
};

export default GoBackBtn;
