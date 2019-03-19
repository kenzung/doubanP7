import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './collection.less';

const Collection = ({
  title,
  url,
  moreButtonText,
  children,
}) => (
  <section className="collection-section">
    <div className="collection-section__title">
      <h3>{title}</h3>
      {url && <Link to={url}>{moreButtonText}</Link>}
    </div>
    <ul>
      {children}
    </ul>
  </section>
);

Collection.propTypes = {
  title: Proptypes.string,
  url: Proptypes.string,
  moreButtonText: Proptypes.string,
  children: Proptypes.node,
};

Collection.defaultProps = {
  title: '',
  moreButtonText: '更多',
  url: null,
  children: null,
};

export default Collection;
