import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from "./options"

const CreatorsSkeleton = props => (
  <ContentLoader
    speed={2}
    width={178}
    height={116}
    viewBox="0 0 178 116"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="10" rx="3" ry="3" width="116" height="18" />

    <rect x="0" y="56" rx="6" ry="6" width="60" height="60" />
    <rect x="70" y="66" rx="3" ry="3" width="65" height="8" />
    <rect x="70" y="88" rx="3" ry="3" width="90" height="10" />
  </ContentLoader>
);

export default CreatorsSkeleton;
