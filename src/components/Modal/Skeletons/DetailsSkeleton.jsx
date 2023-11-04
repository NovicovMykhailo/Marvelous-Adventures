import React from 'react';
import ContentLoader from 'react-content-loader';
import { backgroundColor, foregroundColor } from "./options"

const DetailsSkeleton = props => (
  <ContentLoader
    speed={2}
    width={317}
    height='100%'
    viewBox="0 0 317 40"
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="53" height="14" />
    <rect x="85" y="0" rx="3" ry="3" width="53" height="14" />
    <rect x="170" y="0" rx="3" ry="3" width="53" height="14" />
    <rect x="255" y="0" rx="3" ry="3" width="53" height="14" />

    <rect x="0" y="25" rx="3" ry="3" width="53" height="16" />
    <rect x="85" y="25" rx="3" ry="3" width="53" height="16" />
    <rect x="170" y="25" rx="3" ry="3" width="53" height="16" />
    <rect x="255" y="25" rx="3" ry="3" width="53" height="16" />
  </ContentLoader>
);

export default DetailsSkeleton;
