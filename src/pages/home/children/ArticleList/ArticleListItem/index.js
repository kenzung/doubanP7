import React from 'react';
import './articleListItem.less'
let ArticleListItem = () => (
    <li>
        <a className="kz-article-item">
            <div className="kz-article-item__content">
                <div>
                    <h3>这是标题！</h3>
                    <p>这是正文这是正文！这是正文这是正文！这是正文！这是正文！这是正文！这是正文这是正文！这是正文！这是正文！这是正文！这是正文！这是正文！这是正文！这是正文！</p>
                </div>
                <img alt="this is an nonono"/>
            </div>
            <div className="kz-article-item__footer">
                <div className="footer__author">
                    by&nbsp;<span>作者</span>
                </div>
                <span className="footer__label">这个是栏目</span>
            </div>
        </a>
    </li>
);

export default ArticleListItem;