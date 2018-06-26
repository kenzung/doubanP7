import React from 'react';
import {Link} from 'react-router-dom';
import './articleListItem.less'
let ArticleListItem = ({activity}) => {
    let newContent = activity.content.replace(/<.*?>/g, '');
    newContent = newContent.slice(0,40);
    return (
        <li>
            <Link to="#" className="kz-article-item">
                <div className="kz-article-item__content">
                    <div>
                        <h3>{activity.title}</h3>
                        <p>{newContent}</p>
                    </div>
                    <img alt="this is an nonono" src={activity.image}/>
                </div>
                <div className="kz-article-item__footer">
                    <div className="footer__author">
                        by&nbsp;<span>{activity.owner.name}</span>
                    </div>
                    <span className="footer__label">{activity.subcategory_name && activity.subcategory_name}</span>
                </div>
            </Link>
        </li>
    )
};

export default ArticleListItem;