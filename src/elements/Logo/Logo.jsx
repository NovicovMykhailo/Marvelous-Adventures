import logo from '../../images/logo.svg'
import css from './Logo.module.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        
        <Link className={css.logoContainer} to={"/"}>
            <img className={css.logoImage}src={logo} alt="Logo" />
        </Link>
    );
};

export default Logo;