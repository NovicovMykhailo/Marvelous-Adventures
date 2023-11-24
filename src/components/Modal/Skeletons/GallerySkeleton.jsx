import React from 'react';
import ContentLoader from 'react-content-loader';
import css from './AboutSkeleton.module.css'
import { backgroundColor, foregroundColor } from "./options"

const GallerySkeleton = props => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 335 600"
    className={css.gallery}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="332" height="498" />
    <rect x="0" y="507" rx="8" ry="8" width="80" height="80" />
    <rect x="84" y="507" rx="8" ry="8" width="80" height="80" />
    <rect x="168" y="507" rx="8" ry="8" width="80" height="80" />
    <rect x="252" y="507" rx="8" ry="8" width="80" height="80" />
  </ContentLoader>
);

export default GallerySkeleton;
