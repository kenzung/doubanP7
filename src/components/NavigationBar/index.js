import React from 'react';
import './navigationBar.less';
import {Link} from 'react-router-dom'

const NavigationBar = () => (
    <header className="kz-nav">
        <div className="kz-nav__icon">
            <Link to="/">豆瓣</Link>
        </div>
        <nav>
            <ul className="kz-nav__menu">
                <li><Link to="/movie" className="tag tag-movie">电影</Link></li>
                <li><Link to="/book" className="tag tag-books">图书</Link></li>
                <li><Link to="/broadcast" className="tag tag-broadcast">广播</Link></li>
                <li><Link to="/team" className="tag tag-team">小组</Link></li>
            </ul>
            <Link to="/search"><i className="search-icon"></i></Link>
        </nav>
    </header>
);

export default NavigationBar;