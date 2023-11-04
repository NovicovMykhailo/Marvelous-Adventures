import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from "./options"

const ComicsListSkeleton = props => (
  <ContentLoader
    speed={2}
    width={556}
    height={250}
    viewBox="0 0 556 250"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="116" height="18" />

    <rect x="0" y="36" rx="6" ry="6" width="174" height="200" />
    <rect x="0" y="250" rx="3" ry="3" width="65" height="10" />
    <rect x="0" y="264" rx="3" ry="3" width="90" height="8" />

    <rect x="190" y="36" rx="6" ry="6" width="174" height="200" />
    <rect x="190" y="250" rx="3" ry="3" width="65" height="10" />
    <rect x="190" y="264" rx="3" ry="3" width="90" height="8" />

    <rect x="380" y="36" rx="6" ry="6" width="174" height="200" />
    <rect x="380" y="250" rx="3" ry="3" width="65" height="10" />
    <rect x="380" y="264" rx="3" ry="3" width="90" height="8" />
  </ContentLoader>
);

export default ComicsListSkeleton;
