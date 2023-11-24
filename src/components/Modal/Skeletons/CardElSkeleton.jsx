import ContentLoader from 'react-content-loader';
import css from './AboutSkeleton.module.css'

import { backgroundColor, foregroundColor } from './options';

const CardElSkeleton = props => {

 return  (<ContentLoader
    speed={4}
    width="100%"
    height="100%"
    viewBox="0 0 332 511"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    className={css.card}
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="332" height="445" />

    <rect x="0" y="461" rx="3" ry="3" width="200" height="18" />
    <rect x="0" y="487" rx="2" ry="2" width="120" height="6" />
  </ContentLoader>)
};

export default CardElSkeleton;
