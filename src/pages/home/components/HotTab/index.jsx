import React from 'react';
import { Link } from 'react-router-dom';
import './hotTab.less';

const HotTap = () => (
  <ul className="kz-hot-tap">
    <li><div className="kz-hot-tap__item"><Link to="/">影院热映</Link></div></li>
    <li><div className="kz-hot-tap__item"><Link to="/">欧美新碟榜</Link></div></li>
    <li><div className="kz-hot-tap__item"><Link to="/">豆瓣时间</Link></div></li>
    <li><div className="kz-hot-tap__item"><Link to="/">使用豆瓣App</Link></div></li>
  </ul>
);

export default HotTap;
