import React from 'react';
import { Link } from 'react-router-dom';
import './collection.less';

const Collection = ({
  title,
  url,
  children,
}) => (
  <section className="collection-section">
    <div className="collection-section__title">
      <h3>{title}</h3>
      {url && <Link to={url}>更多</Link>}
    </div>
    <ul>
      {children}
    </ul>
  </section>
);

export default Collection;
