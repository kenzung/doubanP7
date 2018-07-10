import React from 'react';
import SearchItem from './SearchItem';
import {Link} from 'react-router-dom';
import { searchItems } from '../../data/constData';
import './search.less';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.menuList = [];
        this.generateMenuList();
    }
    generateMenuList() {
        let menuListColumn = [];
        for (let i = 0; i <= searchItems.length; i++) {
            if (i % 4 === 0 && i / 4 > 0) {
                this.menuList.push(menuListColumn);
                menuListColumn = [];
            }
            menuListColumn.push(searchItems[i]);
        }
    }
    render() {
        return (
            <section>
                <div className="search-bar">
                    <Link to="/" className="close-btn">关闭</Link>
                    <div>
                        <input className="bar"/>
                    </div>
                </div>
                <ul>
                    {
                        this.menuList.map((menuColumn, index) => (
                            <li key={`column${index}`} className="search-column">
                                {
                                    menuColumn.map((menuItem, index) => (
                                        <SearchItem title={menuItem.title} subTitle={menuItem.subTitle} titleColor={menuItem.titleColor} key={`item${index}`}/>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="search-bottom">
                    <div className="search-bottom-item">
                        <Link to="#" className="search-bottom-item__link">注册账号</Link>
                        <Link to="#" className="search-bottom-item__link">登录豆瓣</Link>
                    </div>
                    <div className="search-bottom-item">
                        <Link to="#" className="search-bottom-item__link">使用桌面版</Link>
                        <Link to="#" className="search-bottom-item__link">使用豆瓣App</Link>
                    </div>
                </div>
            </section>
        )
    }
}