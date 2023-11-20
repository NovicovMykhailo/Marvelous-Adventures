import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from "./options"

const CharacktersSkeleton = props => (
  <ContentLoader
    speed={2}
    width={556}
    height={280}
    viewBox="0 0 556 280"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="10" rx="3" ry="3" width="200" height="18" />

    <rect x="0" y="56" rx="6" ry="6" width="60" height="60" />
    <rect x="70" y="77" rx="3" ry="3" width="90" height="18" />

    <rect x="202" y="56" rx="6" ry="6" width="60" height="60" />
    <rect x="270" y="77" rx="3" ry="3" width="90" height="18" />

    <rect x="393" y="56" rx="6" ry="6" width="60" height="60" />
    <rect x="461" y="77" rx="3" ry="3" width="90" height="18" /> 

    
  </ContentLoader>
);

export default CharacktersSkeleton;
