import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './eventItem.less';

const ArticleListItem = ({ data }) => {
  let newContent = data.content.replace(/<.*?>/g, '');
  newContent = newContent.slice(0, 40);
  return (
    <li>
      <Link to={`/event/${data.id}`} className="kz-article-item">
        <div className="kz-article-item__content">
          <div>
            <h3>{data.title}</h3>
            <p>{newContent}</p>
          </div>
          <img alt="this is an nonono" src={data.image} />
        </div>
        <div className="kz-article-item__footer">
          <div className="footer__author">
                        by&nbsp;
            <span>{data.owner.name}</span>
          </div>
          <span className="footer__label">{data.subcategory_name && data.subcategory_name}</span>
        </div>
      </Link>
    </li>
  );
};

ArticleListItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.object()),
};

ArticleListItem.defaultProps = {
  data: {},
};

export default ArticleListItem;
